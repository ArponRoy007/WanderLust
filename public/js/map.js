// Initialize the map
// We access the global 'coordinates' variable defined in show.ejs
let map = L.map("map").setView([coordinates[1], coordinates[0]], 13);

// Add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add the marker
L.marker([coordinates[1], coordinates[0]])
  .addTo(map)
  .bindPopup("<b>Exact Location</b><br>Will be shown after booking.")
  .openPopup();
