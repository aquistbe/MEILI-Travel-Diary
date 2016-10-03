define({ "api": [
  {
    "type": "get",
    "url": "/triplegs/deleteTripleg&:tripleg_id",
    "title": "Deletes the tripleg specified by id",
    "name": "DeleteTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>OnlyTriplegIn Trip The only tripleg of a trip cannot be deleted. If you want to delete the tripleg, call the trip deletion endpoint</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after deletion</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/getTriplegsOfTrip&:trip_id",
    "title": "Gets the triplegs of a given trip",
    "name": "GetTriplegsOfTrip",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>TripIdInvalid The <code>trip_id</code> is undefined or null.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip for which the triplegs will be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/insertTransitionBetweenTriplegs&:start_time&:end_time&:from_travel_mode&:to_travel_mode&:trip_id",
    "title": "Inserts a missed transition between two triplegs by splitting the existing affected tripleg",
    "name": "InsertTransitionBetweenTriplegs",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> is undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip where the transition will be inserted</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>Time at which the transition started</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>Time at which the transition ended</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "from_travel_mode",
            "description": "<p>The travel mode from which the user changed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "to_travel_mode",
            "description": "<p>The travel mode to which the user changed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after the insertion of the transition tripleg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/updateEndTimeOfTripleg&:tripleg_id&:end_time",
    "title": "Updates the end time of a tripleg",
    "name": "UpdateEndTimeOfTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> or <code>end_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will have its end date modified.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>The new value for the end time of the specified tripleg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after update</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/updateStartTimeOfTripleg&:tripleg_id&:start_time",
    "title": "Updates the start time of a tripleg",
    "name": "UpdateStartTimeOfTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> or <code>start_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will have its start date modified.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>The new value for the start time of the specified tripleg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after update</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/updateTransitionPoiIdOfTripleg&:tripleg_id&:transition_poi_id",
    "title": "Updates the travel mode of a tripleg",
    "name": "UpdateTransitionPoiIdOfTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> or <code>transition_poi_id</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will have its travel mode updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "transition_poi_id",
            "description": "<p>The new value for the transition poi id of the specified tripleg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>Returns whether the operation was successfull or not.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/triplegs/updateTravelModeOfTripleg&:tripleg_id&:travel_mode",
    "title": "Updates the travel mode of a tripleg",
    "name": "UpdateTravelModeOfTripleg",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>tripleg_id</code> or <code>travel_mode</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tripleg_id",
            "description": "<p>Id of the tripleg that will have its travel mode updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "travel_mode",
            "description": "<p>The new value for the travel mode of the specified tripleg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>Returns whether the operation was successfull or not.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/trips/deleteTrip&:trip_id",
    "title": "Deletes a trip",
    "name": "DeleteTrip",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameter <code>trip_id</code> is undefined, null or of a wrong type.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip that will be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trip",
            "optional": false,
            "field": "Trip",
            "description": "<p>Gets the json representation of the next trip to process for the user that performed the action.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/getLastTripOfUser&:user_id",
    "title": "Gets the earliest unannotated trip of the user",
    "name": "GetLastTripOfUser",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>UserIdInvalid The <code>user_id</code> is undefined or null.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user that requests the earliest unannotated trip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trip",
            "optional": false,
            "field": "Trip",
            "description": "<p>The json representation of a trip without its triplegs</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/getTripsForBadge&:user_id",
    "title": "Gets the number of trips that the user has to process",
    "name": "GetTripsForBadge",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>UserIdInvalid The <code>user_id</code> is undefined or null.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user that requests the number of available unannotated trips.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_get_badge_trips_info",
            "description": "<p>Number of unannotated trips available to the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/insertPeriodBetweenTrips&:start_time&:end_time&:user_id",
    "title": "Inserts a missed non movement period between two trips by splitting the existing affected trip",
    "name": "InsertPeriodBetweenTris",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>user_id</code>, <code>start_time</code> or <code>end_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user who inserts the period between trips</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>Time at which the non movement period started</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>Time at which the non movement period ended</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trip",
            "optional": false,
            "field": "Trip",
            "description": "<p>Gets the json representation of the next trip to process for the user that performed the action.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/updateDestinationPoiIdOfTrip&:trip_id&:destination_poi_id",
    "title": "Updates the destination poi id of a trip",
    "name": "UpdateDestinationPoiIdOfTrip",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>trip_id</code> or <code>destination_poi_id</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip that will have its destination poi id updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "destination_poi_id",
            "description": "<p>The new value for the destination_poi_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>The success state of the operation.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/updateEndTimeOfTrip&:trip_id&:end_time",
    "title": "Updates the end time of a trip",
    "name": "UpdateEndTimeOfTrip",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>trip_id</code> or <code>end_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip that will have its end time modified.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>The new value for the end time of the specified trip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after update</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/updatePurposeOfTrip&:trip_id&:purpose_id",
    "title": "Updates the purpose of a trip",
    "name": "UpdatePurposeOfTrip",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>trip_id</code> or <code>purpose_id</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip that will have its purpose updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purpose_id",
            "description": "<p>The new value for the purpose_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Boolean",
            "description": "<p>The success state of the operation.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/updateStartTimeOfTrip&:trip_id&:start_time",
    "title": "Updates the start time of a trip",
    "name": "UpdateStartTimeOfTrip",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "500",
            "description": "<p>InvalidInput The parameters <code>trip_id</code> or <code>start_time</code> are undefined, null or of wrong types.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip that will have its start date modified.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>The new value for the start time of the specified trip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs of the trip after update</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  }
] });