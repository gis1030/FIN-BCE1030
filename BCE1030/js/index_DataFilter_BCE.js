// on personnalise les marqueurs
var BCEIcon01 = L.icon({
    iconUrl: 'src/images/icon-Entreprises.png',
    iconSize: [20, 20],
    iconAnchor: [10, 5],
    popupAnchor: [-5, 5]
});

// BEGIN ======= Donnnes GeoJson comme marqueurs ======= BEGIN \\
// ++++++ Limites de Schaerbeek ++++++++
L.geoJSON([Boundary], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

L.geoJSON([BoundaryDistrict], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

// ++++++ Liste des Marqueurs ++++++++
if (typeof EntityNumLabel === 'undefined' || NACELabel === 'undefined' || DenominationLabel === 'undefined' ||
    EntityTypeLabel === 'undefined' || SectorGroupLabel === 'undefined' || StreetLabel === 'undefined' || QuartierLabel === 'undefined'
    || TypeOfEnterpriseLabel === 'undefined' || JuridicalFormLabel === 'undefined') {

    var EntityNumLabel = ""
    var NACELabel = ""
    var DenominationLabel = ""
    var EntityTypeLabel = ""
    var SectorGroupLabel = ""
    var StreetLabel = ""
    var QuartierLabel = ""
    var TypeOfEnterpriseLabel = ""
    var JuridicalFormLabel = ""

    var Marker1030 = L.geoJSON([ListBCEMarkers1030], {
        style: function (feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            // return L.marker(latlng, { icon: DataIcon05 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#d39f2f',
                color: "#000", //'#d39f2f',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var jsonALL = {};
    jsonALL = ListBCEMarkers1030

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        filter: function (feature, layer) {
            return (feature.properties.Infraction !== "ALL");
        },

        style: function (feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            //return L.marker(latlng, { icon: TreeIcon01 });
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#bd2848',
                color: "#000", //'#bd2848',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Marker1030_00 = Marker1030
    var Marker1030_ALL_00 = Marker1030_ALL

    // Group CLusteres
    GroupMarkersMap1030.addLayer(Marker1030)
    GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL)
}

var GroupMarkersClustersALL1030 = new L.featureGroup([
    GroupMarkersMap1030
]);

carte.addLayer(GroupMarkersMap1030_ALL)
// END ======= Donnnes GeoJson comme marqueurs ======= END \\

// BEGIN ======== Data Viewer ======== BEGIN \\ 
Marker1030.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_ALL.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// END ======== Data Viewer ======== END \\

// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature(feature, layer) {
    var popupContent = "<dt> ID: " + feature.id + "</dt>";
    if (feature.properties.source__term_name) {
        var custompoup = "<dt> Source: " + feature.properties.source__term_name +
            "<dt> Rue: " + feature.properties.sit_rue + "</dt>" +
            "<dt> Info: " + feature.properties.sit_info;
        popupContent += custompoup;
    }
    if (feature.properties.SectorName) {
        var custompoup = "<dt>" + feature.properties.SectorType + ": " +
            feature.properties.SectorName + "</dt>";
        popupContent += custompoup;
    }
    if (feature.properties.ArretSTIB) {
        var custompoup = "<dt>" + feature.properties.ArretSTIB + "</dt>";
        popupContent += custompoup;
    }
    if (feature.properties.Numident) {
        var custompoup = "<dt> Source: " + feature.properties.Source_Pot +
            "<dt> Type Pot: " + feature.properties.Type_Pot + "</dt>" +
            "<dt> Type Pan: " + feature.properties.Type_Pan + "</dt>" +
            "<dt> Entrave Pan: " + feature.properties.Entrave_Pan;
        popupContent += custompoup;
    }
    if (feature.properties.EntityNumber) {
        var custompoup =
            "<dt> EnterpriseNumber : " + feature.properties.EnterpriseNumber + "</dt>" +
            "<dt> Denomination : " + feature.properties.Denomination + "</dt>";
        // "<dt> NaceCode: " + feature.properties.NaceCode + "</dt>" +;
        // "<dt> SectorGroup: " + feature.properties.SectorGroup + "</dt>" +
        // "<dt> Adresses: " + feature.properties.StreetFR + " " + feature.properties.HouseNumber + "</dt>";
        var popupContent0 = "<dt> EntityNumber : " + feature.properties.EntityNumber + "</dt>";

        popupContent = popupContent0 + custompoup;
    }
    layer.bindPopup(popupContent);
}


function MarkerDataView(clickedMarker) {
    //var AdresseRef = clickedMarker.feature.properties.StreetFR + " " + clickedMarker.feature.properties.HouseNumber + ", 1030 Schaerbeek";
    var CommentairesDossier = clickedMarker.feature.properties.Commentaires + " Dossier: " + clickedMarker.feature.properties.Dossier;

    document.getElementById("EntityNumBCE").value = clickedMarker.feature.properties.EntityNumber
    document.getElementById("EnterpNumBCE").value = clickedMarker.feature.properties.EnterpriseNumber
    document.getElementById("EntityTypeBCE").value = clickedMarker.feature.properties.EntityType
    document.getElementById("NomBCE").value = clickedMarker.feature.properties.Denomination
    document.getElementById("NaceBCE").value = clickedMarker.feature.properties.NaceCode
    document.getElementById("SecCodeBCE").value = clickedMarker.feature.properties.SectorCode
    document.getElementById("SecGroupBCE").value = clickedMarker.feature.properties.SectorGroup
    document.getElementById("QuartierBCE").value = clickedMarker.feature.properties.Quartier
    document.getElementById("LatitudeBCE").value = clickedMarker.feature.geometry.coordinates[1]
    document.getElementById("LongitudeBCE").value = clickedMarker.feature.geometry.coordinates[0]
    document.getElementById("AdressesEntityBCE").value = clickedMarker.feature.properties.AdressesEntity
    document.getElementById("AddressEnterpriseBCE").value = clickedMarker.feature.properties.AddressEnterprise
    document.getElementById("StreetBCE").value = clickedMarker.feature.properties.StreetFR
    document.getElementById("Classification").value = clickedMarker.feature.properties.Classification
    document.getElementById("TypeOfEnterprise").value = clickedMarker.feature.properties.TypeOfEnterprise
    document.getElementById("JuridicalForm").value = clickedMarker.feature.properties.JuridicalForm
    document.getElementById("Division").value = clickedMarker.feature.properties.Division
    document.getElementById("Activites").value = clickedMarker.feature.properties.Activites

    //document.getElementById("HouseNumBCE").value = clickedMarker.feature.properties.HouseNumber
    //document.getElementById("CommentairesBCE").value = CommentairesDossier
};

function LoadALLData() {
    Marker1030.eachLayer(function (marker) {
        carte.removeLayer(marker);
    });

    //Marker1030 = Marker1030_00
    Marker1030 = Marker1030_ALL
    Marker1030_ALL = Marker1030_ALL_00

    // On reinitialise les layers
    GroupMarkersMap1030.clearLayers();
    GroupMarkersMap1030_ALL.clearLayers();

    // On va regropue les marqueurs
    GroupMarkersMap1030.addLayer(Marker1030);
    GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL);
}

function filterBy(val) {
    var result = Object.keys(obj).reduce(function (r, e) {
        if (e.toLowerCase().indexOf(val) != -1) {
            r[e] = obj[e];
        } else {
            Object.keys(obj[e]).forEach(function (k) {
                if (k.toLowerCase().indexOf(val) != -1) {
                    var object = {}
                    object[k] = obj[e][k];
                    r[e] = object;
                }
            })
        }
        return r;
    }, {})
    return result;
}

function concatGeoJSON(g1, g2) {
    return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
    }
}

function SearchData() {
    var EntityNumLabel = document.getElementById("EntityNumBCE").value;
    var NACELabel = document.getElementById("NaceBCE").value;
    var DenominationLabel = document.getElementById("NomBCE").value;
    var EntityTypeLabel = document.getElementById("EntityTypeBCE").value;
    var SectorGroupLabel = document.getElementById("SecGroupBCE").value;
    var StreetLabel = document.getElementById("StreetBCE").value;
    var QuartierLabel = document.getElementById("QuartierBCE").value;

    var TypeOfEnterpriseLabel = document.getElementById("TypeOfEnterprise").value;
    var JuridicalFormLabel = document.getElementById("JuridicalForm").value;

    //on initialise les labels
    if (EntityNumLabel == "") {
        EntityNumLabel = "ALLData";
    }
    if (NACELabel == "") {
        NACELabel = "ALLData";
    }
    if (DenominationLabel == "") {
        DenominationLabel = "ALLData";
    }
    if (EntityTypeLabel == "") {
        EntityTypeLabel = "ALLData";
    }
    if (SectorGroupLabel == "") {
        SectorGroupLabel = "ALLData";
    }
    if (StreetLabel == "") {
        StreetLabel = "ALLData";
    }
    if (QuartierLabel == "") {
        QuartierLabel = "ALLData";
    }
    if (TypeOfEnterpriseLabel == "") {
        TypeOfEnterpriseLabel = "ALLData";
    }
    if (JuridicalFormLabel == "") {
        JuridicalFormLabel = "ALLData";
    }

    // on initialise les compteurs
    var k_NACELabel = 0;
    var k_DenominationLabel = 0;
    var k_EntityTypeLabel = 0;
    var k_SectorGroupLabel = 0;
    var k_StreetLabel = 0;
    var k_QuartierLabel = 0;
    var k_TypeOfEnterpriseLabel = 0;
    var k_JuridicalFormLabel = 0;

    // On reinitialise les layers
    GroupMarkersMap1030_ALL.clearLayers();
    var jsonALL_00 = 0;

    // >>> recherche unique par numéro d'entity BCE <<< \\
    if (EntityNumLabel !== "ALLData") {
        jsonSEARCH = {};
        jsonALL_00 = jsonALL;
        mylist = [{ SearchLabel: EntityNumLabel }];
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.EntityNumber).length > 0) {
                return item;
            }
        });
    }

    // >>> recherche multiple <<< \\
    // Code NACE-BEL
    if (EntityNumLabel === "ALLData") {
        if (NACELabel !== "ALLData") {
            jsonSEARCH = {};
            jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: NACELabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.NaceCode).length > 0) {
                    return item;
                }
            });
            k_NACELabel = jsonSEARCH.features.length;
            console.log("lenght k_NACE:", k_NACELabel)
            document.querySelector("#CommentairesBCE").value = 'Code NACE: ' + NACELabel + " > Total: " + k_NACELabel;
        }
    }
    // Denomination de la enterprise (recherche partial)
    if (EntityNumLabel === "ALLData") {
        if (DenominationLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: DenominationLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Denomination.toLowerCase().includes(DenominationLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_DenominationLabel = jsonSEARCH.features.length;
            console.log("length k_Denomination:", k_DenominationLabel)
            document.querySelector("#CommentairesBCE").value = 'Denomination: ' + DenominationLabel + " > Total: " + k_DenominationLabel;
        }
    }
    // Type d'enterprise
    if (EntityNumLabel === "ALLData") {
        if (EntityTypeLabel !== "ALLData") {
            jsonSEARCH = {};
            jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: EntityTypeLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.EntityType.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_EntityTypeLabel = jsonSEARCH.features.length;
            console.log("length k_EntityType:", k_EntityTypeLabel);
            document.querySelector("#CommentairesBCE").value = 'Type Enterprise: ' + EntityTypeLabel + " > Total: " + k_EntityTypeLabel;
        }
    }
    // Sector Economique
    if (EntityNumLabel === "ALLData") {
        if (SectorGroupLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: SectorGroupLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.SectorGroup.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_SectorGroupLabel = jsonSEARCH.features.length;
            console.log("length k_SectorGroup:", k_SectorGroupLabel);
            document.querySelector("#CommentairesBCE").value = 'Group Economique: ' + SectorGroupLabel + " > Total: " + k_SectorGroupLabel;
        }
    }
    // Rue de l'eneterprise  (recherche partial)
    if (EntityNumLabel === "ALLData") {
        if (StreetLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: StreetLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.StreetFR.toLowerCase()).length > 0) {
                    return item;
                }
            });

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.StreetFR.toLowerCase().includes(StreetLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_StreetLabel = jsonSEARCH.features.length;
            console.log("length k_Street:", k_StreetLabel);
            document.querySelector("#CommentairesBCE").value = 'Rue Enterprise: ' + StreetLabel + " > Total: " + k_StreetLabel;
        }
    }
    // Quartier
    if (EntityNumLabel === "ALLData") {
        if (QuartierLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: QuartierLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Quartier.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_QuartierLabel = jsonSEARCH.features.length;
            console.log("length k_Quartier:", k_QuartierLabel);
            document.querySelector("#CommentairesBCE").value = 'Quartier: ' + QuartierLabel + " > Total: " + k_QuartierLabel;
        }
    }

    // Type of Enterprise
    if (EntityNumLabel === "ALLData") {
        if (TypeOfEnterpriseLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: TypeOfEnterpriseLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.TypeOfEnterprise.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_TypeOfEnterpriseLabel = jsonSEARCH.features.length;
            console.log("length k_TypeOfEnterprise:", k_TypeOfEnterpriseLabel);
            document.querySelector("#CommentairesBCE").value = 'Type d\'entreprise: ' + TypeOfEnterpriseLabel + " > Total: " + k_TypeOfEnterpriseLabel;
        }
    }

    // Juridical Form
    if (EntityNumLabel === "ALLData") {
        if (JuridicalFormLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: JuridicalFormLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.JuridicalForm.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_JuridicalFormLabel = jsonSEARCH.features.length;
            console.log("length k_JuridicalForm:", k_JuridicalFormLabel);
            document.querySelector("#CommentairesBCE").value = 'Forme juridique: ' + JuridicalFormLabel + " > Total: " + k_JuridicalFormLabel;
        }
    }

    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas des enterprises répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        var Marker1030_ALL = L.geoJSON([jsonSEARCH], {
            style: function (feature) {
                return feature.properties && feature.properties.style && feature.properties.CustomValue;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function (feature, latlng) {
                //return L.marker(latlng, { icon: TreeIcon01 });
                return L.circleMarker(latlng, {
                    color: 'black',
                    fillColor: '#bd2848',
                    color: "#000", //'#bd2848',
                    fillOpacity: 0.6,
                    radius: 8,
                    weight: 1,
                    opacity: 1
                })
            }
        }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
        GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL)

        Marker1030_ALL.on("click", function (event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });

        //console.log(jsonSEARCH)
    };
}
// END ======== Javascript FUnctions  ======== END \\