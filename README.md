# JSON To GeoJSON Conversion 

## Features
* Converts a specified JSON Object into a basic GeoJSON Object with a specified initial property
* Supplementary function to add more properties to the GeoJSON object

## Functions

There are two key functions in this library as follows.

##### j2gConvert(jsonObject, property)
- jsonObject is an object parameter that refers to the original JSON Object you are intending to convert to GeoJSON. 
- property is a string parameter that refers to the initiating property to include under 'properties'field of the GeoJSON object.


##### j2gAddproperty(geojson, jsonObject, add_property)
- geojson is an object parameter that refers to the initiated GeoJSON object.
- jsonObject is an object parameter that refers to the original JSON Object you are intending to convert to GeoJSON. 
- add_property is a string parameter that refers to the additional property to include under 'properties'field of the GeoJSON object.

##Usage

First, include the javascript library.

```javascript
<script type="text/javascript" src="lib/json2geojson.js"></script> 
```

Next, apply j2gConvert function to the specified JSON Object, together with the initiating property.

```javascript
var geojson = j2gConvert(jsonObject, property)
```

Then, apply j2gAddproperty function to the created object, original JSON object and the additional property required.

```javascript
geojson = j2gAddproperty(geojson, jsonObject, add_property)
```

##License

This code is distributed under the MIT License.


