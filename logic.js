
// PRELIMINARY TEST - ENSURING THAT JAVA SCRIPT IS CONNECTED TO HTML
console.log("Step 1 working");

// CREATE TILE LAYER THAT WILL SERVE AS THE MAP BACKGROUND
let basemap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

// CREATE THE MAP OBJECT WITH OPTIONS
let map =  L.map("map", {
    center: [40.7, -94.5],
    zoom: 3
  });

// ADD 'BASEMAP' TILE LAYER TO MAP  
basemap.addTo(map);

// RETRIEVE EARTHQUAKE GEOJASON DATA
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

d3.json(link).then(function(data) {

  // USE A FUNCTION TO RETURN THE STYLE DATA FOR EACH OF THE EARTHQUAKES PLOTTED
  // SPECIFICALLY, PASS THE MAGNITUDE OF THE EARTHQUAKE INTO TWO SEPARATE FUNCTIONS TO CALCULATE COLOR AND RADIUS
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.5,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "black",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 1.5
    };
  }
  // USE A FUNCTION TO DETERMINE COLOR OF THE MARKER BASED UPON THE EATHQUAKE'S MAGNITUDE
  function getColor(depth) {
    switch (true) {
      case depth > 90:
         return "#19647E";
      case depth > 70:
         return "#4B3F72";
      case depth > 50:
         return "#ea2c2c";
      case depth > 30:
         return "#119DA4";
      case depth > 10:
         return "#98ee00";
      default:
         return "#d4ee00";
    }
  }

  // USE A FUNCTION TO DETERMINE THE RADIUS OF THE EARTHQUAKE MARKER BASED UPON MAGNITUDE
  // NOTE - PROGRAMMATIC DATAFIX BELOW:  EARTHQUAKES WITH A MAGNITUDE OF 0 WERE BEING PLOTTED WITH AN INCORRECT RADIUS
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
  // ADD A GEOJSON LAYER TO THE MAP
  L.geoJson(data, {
    // TURN EACH FEATURE INTO A CIRCLEMARKER
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    // SET STYLE FOR EACH CIRCLEMARKER USING THE STYLEINFO FUNCTION
    style: styleInfo,
    // CREATE A POPUP FOR EACH MARKER TO DISPLAY MAGNITUDE AND LOCATION OF EARTHQUAKE
    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
        + feature.properties.place
      );
    }
  }).addTo(map);


/*LEGEND SPECIFIC*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  /*div.innerHTML += "<h4>Tegnforklaring</h4>";*/
  div.innerHTML += '<i style="background: #d4ee00"></i><span>-10-10</span><br>';
  div.innerHTML += '<i style="background: #98ee00"></i><span>10-30</span><br>';
  div.innerHTML += '<i style="background: #119DA4"></i><span>30-50</span><br>';
  div.innerHTML += '<i style="background: #ea2c2c"></i><span>50-70</span><br>';
  div.innerHTML += '<i style="background: #4B3F72"></i><span>70-90</span><br>';
  div.innerHTML += '<i style="background: #19647E"></i><span>90+</span><br>';
  
  return div;
};

legend.addTo(map);
});

