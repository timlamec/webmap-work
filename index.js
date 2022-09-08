const map = L.map("map").setView([-6.785568, 39.261278], 13);
const osm = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);


fetch("data/Mikocheni.geojson")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      L.geoJSON(data).addTo(map);
    })

fetch("data/Mikocheni_dumb_grid.geojson")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      L.geoJSON(data).addTo(map);
    })
