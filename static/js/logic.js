function createMap(earthQuakesjson) {

    // Create the tile layer that will be the background of our map
  var graymap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.gray",
    accessToken: API_KEY
  });

earthQuakes = eartQuakesjson

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Gray Map": graymap
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "Earthquakes": earthQuakes
  };
console.log(earthQuakes)

  // Create the map object with options
  var map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 3,
    layers: [graymap, earthQuakes]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

// Perform an API call to the USGS API to get earthquake data. Call createMap when complete
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", createMap);