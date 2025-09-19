//On charge les "tuiles"
var carte01 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 13,
    maxZoom: 19,
    id: 'mapbox/streets-v15',
    //tileSize: 512,
    //zoomOffset: -1,
    //accessToken: 'your.mapbox.access.token'
});

// +++++ Google ++++++++++++++++++++++++++++++++++
// Google Terrain > terrain : p
var carte02 = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Streets > standard roadmap : m
var carte03 = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Satellite > satelite only : s
var carte04 = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Hybrid > Hybrid : y
// var carte05 = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
var carte05 = L.tileLayer('http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Terrain-Cycle > terrain With Cycle : t
var carte06 = L.tileLayer('http://{s}.google.com/vt/lyrs=t@127,r@161183078,bike&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Streets-Cycle >
var carte07 = L.tileLayer('http://{s}.google.com/vt/lyrs=m@159185939,bike&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Traffic
var carte08 = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
    attribution: 'données © <a href="//google.com/maps">Google Maps</a>',
    minZoom: 13,
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});


// On initialise la carte 
var carte = L.map('maCarte', { layers: [carte01] }).setView([50.86070401717095, 4.3830651582691456], 13);