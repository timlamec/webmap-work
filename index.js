const map = L.map("map").setView([0.347690, 35.703807], 9);
const osm = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

const geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

 // loading geojson
const dataset = L.geoJSON(table, {
  onEachFeature: function (feature, layer) {

         const popupContent =
        '<h4 class = "text-primary">Sample Point</h4>' +
        '<div class="container"><table class="table table-striped">' +
        "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
        "<tbody><tr><td> CouName </td><td>" +
        feature.properties.CouName +
        "</td></tr>" +
        "<tr><td>SCouName </td><td>" +
        feature.properties.SCouName +
        "</td></tr>" +
        "<tr><td> DivName</td><td>" +
        feature.properties.DivName +
        "</td></tr>" +
        "<tr><td> LocName </td><td>" +
        feature.properties.LocName +
        "</td></tr>" +
        "<tr><td> SLName </td><td>" +
        feature.properties.SLName +
        "</td></tr>";
        
        layer.bindPopup(popupContent);

  },
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
});

const markers = L.markerClusterGroup().addLayer(dataset);
// marker clustering
map.addLayer(markers);