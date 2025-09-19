function ClearData() {
    if (layerGroup) {
        layerGroup.clearLayers();
    }
    if (markerReal) {
        carte.removeLayer(markerReal);
    }

    document.getElementById("EntityNumBCE").value = ""
    document.getElementById("EnterpNumBCE").value = ""
    document.getElementById("EntityTypeBCE").value = ""
    document.getElementById("NomBCE").value = ""
    document.getElementById("NaceBCE").value = ""
    document.getElementById("SecCodeBCE").value = ""
    document.getElementById("SecGroupBCE").value = ""
    document.getElementById("AdressesEntityBCE").value = ""
    document.getElementById("AddressEnterpriseBCE").value = ""
    document.getElementById("StreetBCE").value = ""
    //document.getElementById("HouseNumBCE").value = ""
    //document.getElementById("CityBCE").value = ""
    document.getElementById("QuartierBCE").value = ""
    document.getElementById("LatitudeBCE").value = ""
    document.getElementById("LongitudeBCE").value = ""
    document.getElementById("CommentairesBCE").value = ""

    document.getElementById("TypeOfEnterprise").value = ""
    document.getElementById("JuridicalForm").value = ""
    document.getElementById("Division").value = ""
    document.getElementById("Activites").value = ""
    document.getElementById("Classification").value = ""

}



function ClearData01() {
    document.getElementById("EntityNumBCE").value = ""
    document.getElementById("EnterpNumBCE").value = ""
    document.getElementById("EntityTypeBCE").value = ""
    document.getElementById("NomBCE").value = ""
    document.getElementById("NaceBCE").value = ""
    document.getElementById("SecCodeBCE").value = ""
    document.getElementById("SecGroupBCE").value = ""
    document.getElementById("AdressesEntityBCE").value = ""
    document.getElementById("AddressEnterpriseBCE").value = ""
    document.getElementById("StreetBCE").value = ""
    //document.getElementById("HouseNumBCE").value = ""
    //document.getElementById("CityBCE").value = ""
    document.getElementById("QuartierBCE").value = ""
    document.getElementById("LatitudeBCE").value = ""
    document.getElementById("LongitudeBCE").value = ""
    document.getElementById("CommentairesBCE").value = ""

    document.getElementById("TypeOfEnterprise").value = ""
    document.getElementById("JuridicalForm").value = ""
    document.getElementById("Division").value = ""
    document.getElementById("Activites").value = ""
    document.getElementById("Classification").value = ""

    //LoadALLData();
    window.open("Carte_BCESchaerbeek_ALL_20.html");
    window.close();
};

function Return() {
    window.open("Carte_BCESchaerbeek_ALL_20.html");
    window.close("Carte_BCESchaerbeek_ALL_21.html");
}

function ReloadData() {
    window.close("Carte_BCESchaerbeek_ALL_22.html");
    window.open("Carte_BCEchaerbeek_ALL_22.html");
}


function ClearDataSearch() {
    if (layerGroup) {
        layerGroup.clearLayers();
    }
    if (markerReal) {
        carte.removeLayer(markerReal);
    }

    document.getElementById("EntityNumBCE").value = ""
    document.getElementById("EnterpNumBCE").value = ""
    document.getElementById("EntityTypeBCE").value = ""
    document.getElementById("NomBCE").value = ""
    document.getElementById("NaceBCE").value = ""
    document.getElementById("SecCodeBCE").value = ""
    document.getElementById("SecGroupBCE").value = ""
    document.getElementById("AdressesEntityBCE").value = ""
    document.getElementById("AddressEnterpriseBCE").value = ""
    document.getElementById("StreetBCE").value = ""
    //document.getElementById("HouseNumBCE").value = ""
    //document.getElementById("CityBCE").value = ""
    document.getElementById("QuartierBCE").value = ""
    document.getElementById("LatitudeBCE").value = ""
    document.getElementById("LongitudeBCE").value = ""
    document.getElementById("CommentairesBCE").value = ""

    document.getElementById("TypeOfEnterprise").value = ""
    document.getElementById("JuridicalForm").value = ""
    document.getElementById("Division").value = ""
    document.getElementById("Activites").value = ""
    document.getElementById("Classification").value = ""

    LoadALLData();
    //window.open("Carte_BCESchaerbeek_ALL_22.html");
    //window.close();
}

function ClearData02() {
    if (EntityNumLabel === "") {
        document.querySelector("#EntityNumBCE").value = ""
    } else {
        document.querySelector("#EntityNumBCE").value = EntityNumLabel
    }
    if (NACELabel === "") {
        document.querySelector("#NaceBCE").value = ""
    } else {
        document.querySelector("#NaceBCE").value = NACELabel
    }
    if (DenominationLabel === "") {
        document.querySelector("#NomBCE").value = ""
    } else {
        document.querySelector("#NomBCE").value = DenominationLabel
    }
    if (EntityTypeLabel === "") {
        document.querySelector("#EntityTypeBCE").value = ""
    } else {
        document.querySelector("#EntityTypeBCE").value = EntityTypeLabel
    }
    if (SectorGroupLabel === "") {
        document.querySelector("#SecGroupBCE").value = ""
    } else {
        document.querySelector("#SecGroupBCE").value = SectorGroupLabel
    }
    if (StreetLabel === "") {
        document.querySelector("#StreetBCE").value = ""
    } else {
        document.querySelector("#StreetBCE").value = StreetLabel
    }
    if (QuartierLabel === "") {
        document.querySelector("#QuartierBCE").value = ""
    } else {
        document.querySelector("#QuartierBCE").value = QuartierLabel
    }

    document.getElementById("EnterpNumBCE").value = ""
    document.getElementById("SecCodeBCE").value = ""
    document.getElementById("AdressesEntityBCE").value = ""
    document.querySelector("AddressEnterpriseBCE").value = ""
    //document.getElementById("HouseNumBCE").value = ""
    //document.getElementById("CityBCE").value = ""
    document.getElementById("LatitudeBCE").value = ""
    document.getElementById("LongitudeBCE").value = ""
    document.getElementById("CommentairesBCE").value = ""

    document.getElementById("TypeOfEnterprise").value = ""
    document.getElementById("JuridicalForm").value = ""
    document.getElementById("Division").value = ""
    document.getElementById("Activites").value = ""
    document.getElementById("Classification").value = ""
};

function ClearDataSearchTable() {

    document.getElementById("EntityNumBCE").value = ""
    document.getElementById("EnterpNumBCE").value = ""
    document.getElementById("EntityTypeBCE").value = ""
    document.getElementById("NomBCE").value = ""
    document.getElementById("NaceBCE").value = ""
    document.getElementById("SecCodeBCE").value = ""
    document.getElementById("SecGroupBCE").value = ""
    document.getElementById("AdressesEntityBCE").value = ""
    document.getElementById("AddressEnterpriseBCE").value = ""
    document.getElementById("StreetBCE").value = ""
    //document.getElementById("HouseNumBCE").value = ""
    //document.getElementById("CityBCE").value = ""
    document.getElementById("QuartierBCE").value = ""
    document.getElementById("LatitudeBCE").value = ""
    document.getElementById("LongitudeBCE").value = ""
    document.getElementById("CommentairesBCE").value = ""

    document.getElementById("TypeOfEnterprise").value = ""
    document.getElementById("JuridicalForm").value = ""
    document.getElementById("Division").value = ""
    document.getElementById("Activites").value = ""
    document.getElementById("Classification").value = ""

    //LoadALLData();
    window.open("Carte_BCESchaerbeek_ALL_40.html");
    window.close();
}