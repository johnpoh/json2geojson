//Convert JSON to GEOJSON 
	
function j2gConvert(jsonObject, property) {
	
	var newlistgeojson = {};
	newlistgeojson['type'] = 'FeatureCollection';
	newlistgeojson['features'] = [];
 
for (i=0; i < jsonObject.length; i++) {
  var newFeature = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [jsonObject[i]['Lng'], jsonObject[i]['Lat']]
    },
    "properties": {
      property0: jsonObject[i][property]
    }
  }
  newlistgeojson['features'].push(newFeature);
}

	return newlistgeojson;
	
}
// End Convert JSON to GEOJSON

//Add One More Property

function j2gAddproperty(geojson, jsonObject, add_property) {

  for (i=0; i < jsonObject.length; i++) {
    geojson['features'][i]['properties'][add_property] = jsonObject[i][add_property];

  }
  return geojson;

}

//End Add One More Property