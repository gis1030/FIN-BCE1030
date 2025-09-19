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
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
    })

    var jsonALL = {};
    jsonALL = ListBCEMarkers1030

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        filter: function (feature, layer) {
            return (feature.properties.EntityNumber !== "ALL");
            //return (feature.properties.EnterpriseNumber !== "ALL" && feature.properties.EntityType !== "ALL");
        },
    })

    var Marker1030_00 = Marker1030
    var Marker1030_ALL_00 = Marker1030_ALL
}

// BEGIN ======== Javascript FUnctions  ======== BEGIN 
function MarkerDataView(clickedMarker) {
    //var AdresseRef = clickedMarker.feature.properties.StreetFR + " " + clickedMarker.feature.properties.HouseNumber + ", 1030 Schaerbeek";
    //var CommentairesDossier = clickedMarker.feature.properties.Commentaires + " Dossier: " + clickedMarker.feature.properties.Dossier;

    document.querySelector("#EntityNumBCE").value = clickedMarker.feature.properties.EntityNumber // Search Data
    document.querySelector("#EntityTypeBCE").value = clickedMarker.feature.properties.EntityType // Search Data
    document.querySelector("#NomBCE").value = clickedMarker.feature.properties.Denomination // Search Data
    document.querySelector("#NaceBCE").value = clickedMarker.feature.properties.NaceCode // Search Data
    document.querySelector("#LatitudeBCE").value = clickedMarker.feature.geometry.coordinates[1]
    document.querySelector("#LongitudeBCE").value = clickedMarker.feature.geometry.coordinates[0]
    document.querySelector("#SecGroupBCE").value = clickedMarker.feature.properties.SectorGroup // Search Data
    document.querySelector("#StreetBCE").value = clickedMarker.feature.properties.StreetFR // Search Data
    document.querySelector("#QuartierBCE").value = clickedMarker.feature.properties.Quartier // Search Data
    document.querySelector("#EnterpNumBCE").value = clickedMarker.feature.properties.EnterpriseNumber
    document.querySelector("#SecCodeBCE").value = clickedMarker.feature.properties.SectorCode
    document.querySelector("#HouseNumberBCE").value = clickedMarker.feature.properties.HouseNumber
    document.querySelector("#BoxBCE").value = clickedMarker.feature.properties.Box
    document.querySelector("#AdresseURBIS").value = clickedMarker.feature.properties.AdressesFR_URBIS
    document.querySelector("#AdressesEntityBCE").value = clickedMarker.feature.properties.AdressesFR_BCE
    document.querySelector("#AddressEnterpriseBCE").value = clickedMarker.feature.properties.AddressEnterprise
    document.querySelector("#QuartierCodeBCE").value = clickedMarker.feature.properties.QuartierCode

    document.getElementById("Classification").value = clickedMarker.feature.properties.Classification
    document.getElementById("TypeOfEnterprise").value = clickedMarker.feature.properties.TypeOfEnterprise
    document.getElementById("JuridicalForm").value = clickedMarker.feature.properties.JuridicalForm
    document.getElementById("Division").value = clickedMarker.feature.properties.Division
    document.getElementById("Activites").value = clickedMarker.feature.properties.Activites

    // optional
    //document.getElementById("AdresseBCE").value = AdresseRef
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
    var k_EntityNumLabel = 0;
    var k_NACELabel = 0;
    var k_DenominationLabel = 0;
    var k_EntityTypeLabel = 0;
    var k_SectorGroupLabel = 0;
    var k_StreetLabel = 0;
    var k_QuartierLabel = 0;
    var k_TypeOfEnterpriseLabel = 0;
    var k_JuridicalFormLabel = 0;

    // On reinitialise les layers >> Points
    // GroupMarkersMap1030_ALL.clearLayers();
    var jsonALL_00 = 0;

    // >>> recherche unique par numéro d'entity BCE <<<
    if (EntityNumLabel !== "ALLData") {
        jsonSEARCH = {};
        jsonALL_00 = jsonALL;
        mylist = [{ SearchLabel: EntityNumLabel }];
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.EntityNumber).length > 0) {
                return item;
            }
        });
        k_EntityNumLabel = jsonSEARCH.features.length;
        document.querySelector("#CommentairesBCE").value = 'Entité BCE: ' + k_EntityNumLabel + " > Total: " + k_EntityNumLabel;
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
            document.querySelector("#CommentairesBCE").value = 'Forme juridique: ' + JuridicalFormLabel + " > Total: " + k_JuridicalFormLabel;
        }
    }
    // END <<<< recherche multiple >>> \\

    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas d'arborescence répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearchTable();
    } else {
        HTMLTableViewer(jsonSEARCH);
    };
};