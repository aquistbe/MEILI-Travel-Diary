
var TriplegPanel = TriplegPanel || function(elementId, tripId, tripleg) {

  this.elementId = elementId;
  this.tripId = tripId;
  this.tripleg = tripleg;

  Emitter(this);

  this.generateElement();

  return this;
};

TriplegPanel.prototype = {

  _onTimeSet: function(e) {

    var $target = $(e.target);

    var newTime = new Date(this.tripleg.getStartTime().getTime());
    newTime.setMinutes(e.time.minutes);
    newTime.setHours(e.time.hours);
    newTime = newTime.getTime();

    log.info('UI Timeline -> _onTimeSet','changed timepicker start value of tripleg '+ this.tripleg.getId() +' to '+ newTime);

    if(this.tripleg.getStartTime().getTime() != newTime) {
      if ($target.hasClass('start')) {
        this.emit('start-time-change', this.tripleg, newTime);
      } else if($target.hasClass('end')) {
        this.emit('end-time-change', this.tripleg, newTime);
      }
    } else {
      $target.timepicker('setTime', this.tripleg.getStartTime(true));
    }

    e.preventDefault();
  },

  _bindEventListeners: function($element) {

    // Tripleg mode change
    $element.on('change', '.mode-select', function(e) {
      this.tripleg.updateMode(e.target.value);
      log.debug('UI TriplegPanel -> modecanged', 'on', this.tripleg.getId(), 'to', e.target.value);
    }.bind(this));

    // Tripleg panel mouseover
    $element.on('mouseover', '.timeline-panel', function(e) {
      if(this.tripleg.polylineLayer) {
        this.tripleg.polylineLayer.setStyle({ opacity: 1 });
        log.debug('UI TriplegPanel -> mouseover', 'on', this.tripleg.getId());
      }
    }.bind(this));

    // Tripleg panel mouse exit
    $element.on('mouseout', '.timeline-panel', function(e) {
      if(this.tripleg.polylineLayer) {
        this.tripleg.polylineLayer.setStyle({ opacity: 0.6 });
        log.debug('UI TriplegPanel -> mouseout', 'on', this.tripleg.getId());
      }
    }.bind(this));

    // Tripleg panel mouse click
    $element.on('click', '.zoom-to-tripleg', function(e) {
      if(this.tripleg.polylineLayer) {
        map.fitBounds(this.tripleg.polylineLayer.getBounds());
        log.debug('UI TriplegPanel -> zoom-to-tripleg click', 'Zoomed to layer ' + this.tripleg.getId());
      }
      e.preventDefault();
      return false;
    }.bind(this));

    $element.on('click', '.delete-tripleg', function(e) {
      new Confirm().show('Delete tripleg', 'Do you really want to delete this tripleg?', function() {
        this.emit('delete-tripleg', this.tripleg);
        log.debug('UI TriplegPanel -> delete-tripleg click', 'Delete tripleg ' + this.tripleg.getId());
      }.bind(this));
      e.preventDefault();
      return false;
    }.bind(this));


    $element.on('change', '.place-selector.transition', function(e) {
      if(e.target.value) {
        this.tripleg.updateTransitionPoiIdOfTripleg(e.target.value);
      }
    }.bind(this));

    // Activate timepickers
    $element.find('.time-picker.start').timepicker({
        minuteStep: 1,
        showMeridian: false,
        disableMousewheel:true,
        defaultTime: this.tripleg.getStartTime(true)
    }).on('hide.timepicker', this._onTimeSet.bind(this));

    $element.find('.time-picker.end').timepicker({
        minuteStep: 1,
        showMeridian: false,
        disableMousewheel:true,
        defaultTime: this.tripleg.getEndTime(true)
    }).on('hide.timepicker', this._onTimeSet.bind(this));

    // Open insert transition modal
    $element.on('click','.add-transition', function(e) {
      this.emit('open-transition-modal', this.tripleg);
      e.preventDefault();
      return false;
    }.bind(this));

  },

 /**
   * Appends the timeline element of a tripleg to the timeline list and adds its listeners
   * @param tripleg - the tripleg element
   */
  generateElement: function(tripId, tripleg) {

    if (this.tripleg.getType() == 1){
      var $ul = $('#'+this.elementId+' > ul');
      var $li = $('<li></li>');

      $li.html(this._generateContent(this.tripId, this.tripleg));
      // Add listeners
      this._bindEventListeners($li);
      // Add tripleg panel
      $ul.append($li);
      // Add transition panel
      $ul.append(this.getTransitionPanel(this.tripleg));
    }
  },

  /**
   * Generates the outerHTML for the timeline element corresponding to a tripleg
   * @param tripleg - the tripleg element
   * @returns {string} - outerHTML of the timeline element
   */
  _generateContent: function(tripId, tripleg) {
    var triplegId = tripleg.getId();
    var classes = [];
    if(tripleg.isFirst) {
      classes.push('first')
    }
    if(tripleg.isLast) {
      classes.push('last')
    }
    var contentHtml = [
      '<ul class="tl-ctrl">',
      '<li><a class="zoom-to-tripleg" title="Zoom map to tripleg"><span class="glyphicon glyphicon-search medium"></span></a></li>',
        ((tripleg.isFirst && tripleg.isLast) ? '' : '<li><a class="delete-tripleg" title="Delete tripleg"><span class="glyphicon glyphicon-trash"></span></a></li>'),
      '</ul>',

      '<div class="timeline-panel" style="background-color:'+tripleg.getColor(0.6)+'">',
        '<div class="tl-heading">',
        '<p><strong>',
             '<span class="distance">Travelled ' + tripleg.getDistance() + '</span>',
             '<span class="travel-time"> in ' + tripleg.getTravelTime() + ' min </span>',
          '</strong></p>',
            this._getModeSelector(tripleg),
        '</div>',
        '<div class="tl-body">',

          '<div class="row">',
            '<div class="col-md-6">',
              '<label for="timepickerstart_'+triplegId+'">Started</label>',
              '<div class="input-group bootstrap-timepicker timepicker">',
                '<input id="timepickerend_'+triplegId+'" readonly="true" class="form-control time-picker start input-small ' + classes.join(' ') + '" type="text"><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>',
              '</div>',
            '</div>',
            '<div class="col-md-6">',
              '<label for="timepickerend_'+triplegId+'">Ended</label>',
              '<div class="input-group bootstrap-timepicker timepicker">',
                '<input id="timepickerend_'+triplegId+'" readonly="true" type="text" class="time-picker end form-control input-small ' + classes.join(' ') + '"><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>',
              '</div>',
            '</div>',
          '</div>',
          (tripleg.isLast ? '' : this._generatePlaceSelector(tripleg.places)),
          '<br>',
          '<a class="add-transition btn btn-default" href="#" role="button"><i class="glyphicon glyphicon-transfer"></i> Did we miss a transfer? Click to add</a>',

        '</div>',
      '</div>'
    ];

    return contentHtml.join('');
  },

  _generatePlaceSelector: function(places) {
    var placeSelector = [];
    if (places && places.length > 0) {

      var selectorOptions = [];
      var label = 'Transferred at';
      var specifyOptionLabel = '(Optional) Specify transfer place';


      for (var i=0; i < places.length; i++) {
        var place = places[i];
        var id = place.osm_id;
        var type = place.type ? ' ('+place.type+')' : '';
        if (id !== undefined) {
          selectorOptions.push('<option value="' + id + '">' + place.name + type + '</option>');
        }
      }

      var maxAccuracy = places[0].accuracy;
      if (maxAccuracy < 50) {
        // Can not preselect for the user
        selectorOptions.unshift('<option value="-1" disabled selected lang="en">' + specifyOptionLabel + '</option>');
      }

      placeSelector = ['<p lang="en">',
                        '<label for="place-selector">' + label + '</label>',
                        '<div>',
                        '<select class="form-control form-control-inline place-selector transition">',
                          selectorOptions.join(''),
                        '</select></p>',
                        '</div>'];
    }
    return placeSelector.join('');
  },

    /**
   * Returns the outerHTML of a MODE selector
   * @param mode - an array containing mode ids and their inference confidence
   * @param triplegid - the id of the tripleg with which the modes are associated with
   * @returns {string} - outerHTML of the mode selector
   */
  _getModeSelector: function(tripleg){
      var maxVal = tripleg.getMode().accuracy;
      var classes = ' form-control';
      var options = [];

      if(maxVal<50) {
        classes += ' form-value-invalid';
        options.push('<option lang="en" value="-1" disabled selected>Specify your travel mode</option>');
      }

      for (var i = 0; i < tripleg.mode.length; i++) {
        var mode = tripleg.mode[i];
        options.push('<option lang="en" value="' + mode.id + '">' + mode.name + '</option>');
      }

      var selector = [
        '<label for="mode-select">By</label>',
        '<select class="mode-select' + classes + '" name="selectmode">',
          options.join(''),
        '</select>'
      ].join('');

      return selector;
  },

   getTransitionPanel: function(tripleg) {
    var transitionPanel = [];

    // Not the last trip leg -> generate panel
    // TODO! handle language for mode and the case that there is no mode set
    if (!tripleg.isLast){
      var nextTripleg = tripleg.getNext().getNext();
      transitionPanel = [
        '<li>',
          '<div class="tldate transition-panel" id="tldate' + nextTripleg.getId() + '">',
            '<p lang="en">'+ tripleg.getEndTime(true) +' - '+ nextTripleg.getStartTime(true) +' - Transferred from '+ tripleg.getMode().name +' to '+ nextTripleg.getMode().name +'</p>',
          '</div>',
        '</li>'];
    }

    return transitionPanel.join('');
  }
};