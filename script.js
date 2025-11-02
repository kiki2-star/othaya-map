// Initialize map centered on Othaya
var map = L.map('map').setView([-0.5506, 36.9481], 13);

// --- Define Basemaps ---
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
});

var satellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0','mt1','mt2','mt3'],
  attribution: '© Google Satellite'
});

var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '&copy; CARTO'
});

// --- Add default basemap ---
osm.addTo(map);

// --- Marker for Othaya ---
var marker = L.marker([-0.5506, 36.9481]).addTo(map);
marker.bindPopup("<b>Othaya</b><br>Othaya Land Of Milk and Honey.<br><i>@Kiki</i>").openPopup();

// --- Layer control ---
var baseMaps = {
  "OpenStreetMap": osm,
  "Satellite": satellite,
  "Dark Mode": dark
};
L.control.layers(baseMaps).addTo(map);

// --- Coordinates display ---
map.on('mousemove', function (e) {
  document.getElementById('coords').innerHTML =
    "Lat: " + e.latlng.lat.toFixed(5) + ", Lng: " + e.latlng.lng.toFixed(5);
});
