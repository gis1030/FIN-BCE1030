function HTMLTableViewer(jsonSEARCH) {
    let geoJSON = []
    let featureNames = []
    let Data1030 = [];

    geoJSON = jsonSEARCH;
    //console.log(geoJSON);

    for (let i = 0; i < geoJSON.features.length; i++) {

        let Latitude = geoJSON.features[i].geometry.coordinates[1]
        let Longitude = geoJSON.features[i].geometry.coordinates[0]

        let currentFeature = geoJSON.features[i];

        let EntityNumber = currentFeature.properties.EntityNumber; //EntityNumber
        let EnterpriseNumber = currentFeature.properties.EnterpriseNumber; // EnterpriseNumber
        let EntityType = currentFeature.properties.EntityType;  //EntityType
        let Denomination = currentFeature.properties.Denomination; //Denomination
        let TypeOfEnterprise = currentFeature.properties.TypeOfEnterprise; //TypeOfEnterprise
        let Classification = currentFeature.properties.Classification;
        let JuridicalForm = currentFeature.properties.JuridicalForm; //JuridicalForm

        let NaceCode = currentFeature.properties.NaceCode; //Nace Code
        let SectorGroup = currentFeature.properties.SectorGroup; //Sector Group
        let SectorCode = currentFeature.properties.SectorCode; // SectorCode
        let Division = currentFeature.properties.Division; //Division
        let Activites = currentFeature.properties.Activites; //Activites

        let StreetFR = currentFeature.properties.StreetFR //StreetFR
        let HouseNumber = currentFeature.properties.HouseNumber; //HouseNumber 
        let Box = currentFeature.properties.Box; //Box 
        let AdressesEntityBCE = currentFeature.properties.AdressesFR_BCE; //AdressesEntity
        let Quartier = currentFeature.properties.Quartier; //Quartier
        let AdresseURBIS = currentFeature.properties.AdressesFR_URBIS; //AdressesEntity_URBIS
        let QuartierCode = currentFeature.properties.QuartierCode; //QuartierCode
        let AddressEnterprise = currentFeature.properties.AddressEnterprise; //AdressesEntity

        Data1030.push({
            EntityNumber: EntityNumber,
            EnterpriseNumber: EnterpriseNumber,
            EntityType: EntityType,
            Denomination: Denomination,
            TypeOfEnterprise: TypeOfEnterprise,
            Classification: Classification,
            JuridicalForm: JuridicalForm,

            NaceCode: NaceCode,
            SectorGroup: SectorGroup,
            SectorCode: SectorCode,
            Division: Division,
            Activites: Activites,

            StreetFR: StreetFR,
            HouseNumber: HouseNumber,
            Box: Box,
            AdressesEntityBCE: AdressesEntityBCE,
            Quartier: Quartier,
            Latitude: Latitude,
            Longitude: Longitude,

            AdresseURBIS: AdresseURBIS,
            QuartierCode: QuartierCode,
            AddressEnterprise: AddressEnterprise,
        });
    }

    let res = document.querySelector('#res');
    res.innerHTML = '';

    for (let item of Data1030) {
        res.innerHTML += `
        <tr>
			<td>${item.EntityNumber}</td>
            <td>${item.EnterpriseNumber}</td>
			<td>${item.EntityType}</td>
			<td>${item.Denomination}</td>
            <td>${item.TypeOfEnterprise}</td>
            <td>${item.Classification}</td>
            <td>${item.JuridicalForm}</td>
			<td>${item.NaceCode}</td>
			<td>${item.SectorGroup}</td>
            <td>${item.SectorCode}</td>
            <td>${item.Division}</td>
            <td>${item.Activites}</td>
			<td>${item.AdressesEntityBCE}</td>
            <td>${item.AdresseURBIS}</td>
			<td>${item.Quartier}</td>
			<td>${item.Latitude}</td>
			<td>${item.Longitude}</td>
            <td>${item.AddressEnterprise}</td>
        </tr>
        `
    }

}

//  +++++++++++++ Exportacion e Importacion de archivos CSV +++++++++++++
// BEGIN ----------------------------------------------------------------
const toCsv = function (table) {
    // Query all rows
    const rows = table.querySelectorAll('tr');

    return [].slice.call(rows)
        .map(function (row) {
            // Query all cells
            const cells = row.querySelectorAll('th,td');
            return [].slice.call(cells)
                .map(function (cell) {
                    return cell.textContent;
                })
                .join(';');
        })
        .join('\n');
};

const download = function (text, fileName) {
    const link = document.createElement('a');
    link.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`);
    link.setAttribute('download', fileName);

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};

const table = document.getElementById('exportMe');
const exportBtn = document.getElementById('export');

exportBtn.addEventListener('click', function () {
    // Export to csv
    const csv = toCsv(table);

    // Download it
    download(csv, 'Data1030.csv');
});

// END ------------------------------------------------------------------
//  +++++++++++++ Exportacion e Importacion de archivos CSV +++++++++++++