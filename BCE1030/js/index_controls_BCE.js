// ++++++++ Choix de cartes et Elements ++++++++
var CarteGroup = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    /* "<b>Google Streets</b>": carte03,
     "<b>Google Satellite</b>": carte04,
     "<b>Google Satellite-Streets</b>": carte05,
     "<b>Google Terrain-Cycle</b>": carte06,
     "<b>Google Streets-Cycle</b>": carte07,
     "<b>Google Traffic</b>": carte08,*/
};

var GroupDataALL = {
    "<img src='images/icon-Entreprises.png' width='24px'/><b>agriculture, sylviculture et pêche</b></br>": GroupMarkersMap1030_Q01,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>industries extractives</b></br>": GroupMarkersMap1030_Q02,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>industrie manufacturière</b></br>": GroupMarkersMap1030_Q03,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>production et distribution d'électricité, de gaz, de vapeur et d'air conditionné</b></br>": GroupMarkersMap1030_Q04,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>production et distribution d'eau- assainissement, gestion des déchets et dépollution</b></br>": GroupMarkersMap1030_Q05,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>construction</b></br>": GroupMarkersMap1030_Q06,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>commerce de gros et de detail- réparation de vehicules automobiles et de motocycles</b></br>": GroupMarkersMap1030_Q07,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>transports et entreposage</b></br>": GroupMarkersMap1030_Q08,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>hébergement et restauration</b></br>": GroupMarkersMap1030_Q09,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>information et communication</b></br>": GroupMarkersMap1030_Q10,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>activités financières et d'assurance</b></br>": GroupMarkersMap1030_Q11,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>activités immobilières</b></br>": GroupMarkersMap1030_Q12,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>activités spécialisées, scientifiques et techniques</b></br>": GroupMarkersMap1030_Q13,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>activités de services administratifs et de soutien</b></br>": GroupMarkersMap1030_Q14,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>administration publique et defense- securie sociale obligatoire</b></br>": GroupMarkersMap1030_Q15,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>enseignement</b></br>": GroupMarkersMap1030_Q16,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>santé humaine et action sociale</b></br>": GroupMarkersMap1030_Q17,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>arts, spectacles et activités récréatives</b></br>": GroupMarkersMap1030_Q18,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>autres activités de services</b></br>": GroupMarkersMap1030_Q19,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>activités des ménages</b></br>": GroupMarkersMap1030_Q20,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>activités des organismes extra</b></br>": GroupMarkersMap1030_Q21,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>non renseigné</b></br>": GroupMarkersMap1030_Q22,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Toutes les Entites</b></br>": GroupMarkersMap1030_00,
};

var LControl01 = L.control.layers(GroupDataALL).addTo(carte);
var LControl00 = L.control.layers(CarteGroup).addTo(carte);
// ++++++++ Choix de cartes et Elements ++++++++

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    layerGroup.clearLayers();
}).addTo(carte);

// +++++++ Géolocalisation ++++++++
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var location = e.latlng
    L.marker(location).addTo(carte)
    L.circle(location, radius).addTo(carte);
}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeafvar() {
    carte.on('locationfound', onLocationFound);
    carte.on('locationerror', onLocationError);
    carte.locate({ setView: true, maxZoom: 15 });
}

L.easyButton('<img src="images/gps-position.png" width="26" height="26" >', function () {
    getLocationLeafvar()
}).addTo(carte);

// +++++++  MousePosition Maps ++++++++
var mousePoistion = L.geoportalControl.MousePosition({
    position: 'bottomright',
    collapsed: true,
    units: [],
}).addTo(carte);

// +++++++ Esri Leafvar Geocoder ++++++++
var searchControl = L.esri.Geocoding.geosearch({
    position: 'topleft',
    zoomToResult: true,
    useMapBounds: true,
    providers: [L.esri.Geocoding.arcgisOnlineProvider()],
    collapseAfterResult: true,
    expanded: false,
    title: 'Recherche d`emplacement',
    placeholder: 'SVP, Entrez une adresse...'
}).addTo(carte);

var geocodeService = L.esri.Geocoding.geocodeService({});
var layerGroup = L.layerGroup().addTo(carte);
carte.on('click', function (e) {

    geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) {
            return;
        }
        //var emplacement = convertToAddress(e.latlng);
        var lngLatString = `${Math.round(result.latlng.lat * 100000) / 100000}, ${Math.round(result.latlng.lng * 100000) / 100000}`;
        layerGroup.clearLayers();
        marker = L.marker(result.latlng)
            .addTo(layerGroup) //.addTo(carte) l'utilisation de vette option permet au marqueur de rester sur la carte
            .bindPopup(`<dt>${lngLatString}</dt>` + `<dt>${result.address.LongLabel}</dt>`) // adresse avec les coordonnées gps 
            //.bindPopup(result.address.Match_addr) // adresse sans les coordonnées gps 
            //.bindPopup(result.address.LongLabel) // version plus longue de l'adresse Match_addr contenant plus d'informations administratives
            //.bindPopup(result.address.ShortLabel) // version abrégée de l'adresse Match_addr
            .openPopup();
    });
});

// +++++++ menu principal +++++++++++++++++
let MyControlClass = L.Control.extend({
    options: {
        position: 'topleft',
    },

    onAdd: function (carte) {
        var div = L.DomUtil.create('div', 'leaflet-bar my-control');

        var myButton = L.DomUtil.create('button', 'my-button-class', div);
        myButton.innerHTML = 'menu principal';
        myButton.style.width = '85px';
        L.DomEvent.on(myButton, 'click', function () {
            window.open("../index.html");
            window.close();
        }, this);
        return div;
    },

    onRemove: function (carte) {
    }
});
let myControl = new MyControlClass().addTo(carte);

// +++++++ Menu principal  +++++++++++
let ChartPopClass = L.Control.extend({
    options: { position: 'topleft' },

    onAdd: function (carte) {
        var div = L.DomUtil.create('div', 'leaflet-bar my-control');

        var myButton = L.DomUtil.create('button', 'my-button-class', div);
        myButton.innerHTML = 'Affichage des statistiques globales';
        myButton.style.width = '150px';
        myButton.style.height = '30px';
        L.DomEvent.on(myButton, 'click', function () {
            window.open("BCE1030Charts.html");
            window.close();
        }, this);
        return div;
    },

    onRemove: function (carte) {
    }
});
let ChartPopControl = new ChartPopClass().addTo(carte);

// +++++++ Title  +++++++++++
var title = new L.Control({ 'position': 'bottomleft' });
title.onAdd = function (carte) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
title.update = function () {
    this._div.innerHTML = '<a style="font-size: 17px; background-color: white; border: 4px solid white">Entités commerciales BCE-1030</a>';
};
title.addTo(carte);

// +++++++ .Watermark  ++++++++++
L.Control.Watermark = L.Control.extend({
    onAdd: function (carte) {
        var img = L.DomUtil.create('img');
        img.src = 'images/schaerbeek1030_logo_white.png';
        img.style.width = '75px';

        return img;
    },
    onRemove: function (carte) {
        // Nothing to do here
    }
});
L.control.watermark = function (opts) { return new L.Control.Watermark(opts); }
L.control.watermark({ position: 'bottomleft' }).addTo(carte);