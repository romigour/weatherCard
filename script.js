$(document).ready(function() {

    const Key = '3d9681282fcc327f4d3a638bf05545435e6b5cfeeb7da4bb8a7dba4cee9e8d4f';
    WEATHER = {
        0: "Soleil",
        1: "Peu nuageux",
        2: "Ciel voilé",
        3: "Nuageux",
        4: "Très nuageux",
        5: "Couvert",
        6: "Brouillard",
        7: "Brouillard givrant",
        10: "Pluie faible",
        11: "Pluie modérée",
        12: "Pluie forte",
        13: "Pluie faible verglaçante",
        14: "Pluie modérée verglaçante",
        15: "Pluie forte verglaçante",
        16: "Bruine",
        20: "Neige faible",
        21: "Neige modérée",
        22: "Neige forte",
        30: "Pluie et neige mêlées faibles",
        31: "Pluie et neige mêlées modérées",
        32: "Pluie et neige mêlées fortes",
        40: "Averses de pluie locales et faibles",
        41: "Averses de pluie locales",
        42: "Averses locales et fortes",
        43: "Averses de pluie faibles",
        44: "Averses de pluie",
        45: "Averses de pluie fortes",
        46: "Averses de pluie faibles et fréquentes",
        47: "Averses de pluie fréquentes",
        48: "Averses de pluie fortes et fréquentes",
        60: "Averses de neige localisées et faibles",
        61: "Averses de neige localisées",
        62: "Averses de neige localisées et fortes",
        63: "Averses de neige faibles",
        64: "Averses de neige",
        65: "Averses de neige fortes",
        66: "Averses de neige faibles et fréquentes",
        67: "Averses de neige fréquentes",
        68: "Averses de neige fortes et fréquentes",
        70: "Averses de pluie et neige mêlées localisées et faibles",
        71: "Averses de pluie et neige mêlées localisées",
        72: "Averses de pluie et neige mêlées localisées et fortes",
        73: "Averses de pluie et neige mêlées faibles",
        74: "Averses de pluie et neige mêlées",
        75: "Averses de pluie et neige mêlées fortes",
        76: "Averses de pluie et neige mêlées faibles et nombreuses",
        77: "Averses de pluie et neige mêlées fréquentes",
        78: "Averses de pluie et neige mêlées fortes et fréquentes",
        100: "Orages faibles et locaux",
        101: "Orages locaux",
        102: "Orages fort et locaux",
        103: "Orages faibles",
        104: "Orages",
        105: "Orages forts",
        106: "Orages faibles et fréquents",
        107: "Orages fréquents",
        108: "Orages forts et fréquents",
        120: "Orages faibles et locaux de neige ou grésil",
        121: "Orages locaux de neige ou grésil",
        122: "Orages locaux de neige ou grésil",
        123: "Orages faibles de neige ou grésil",
        124: "Orages de neige ou grésil",
        125: "Orages de neige ou grésil",
        126: "Orages faibles et fréquents de neige ou grésil",
        127: "Orages fréquents de neige ou grésil",
        128: "Orages fréquents de neige ou grésil",
        130: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
        131: "Orages locaux de pluie et neige mêlées ou grésil",
        132: "Orages fort et locaux de pluie et neige mêlées ou grésil",
        133: "Orages faibles de pluie et neige mêlées ou grésil",
        134: "Orages de pluie et neige mêlées ou grésil",
        135: "Orages forts de pluie et neige mêlées ou grésil",
        136: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
        137: "Orages fréquents de pluie et neige mêlées ou grésil",
        138: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
        140: "Pluies orageuses",
        141: "Pluie et neige mêlées à caractère orageux",
        142: "Neige à caractère orageux",
        210: "Pluie faible intermittente",
        211: "Pluie modérée intermittente",
        212: "Pluie forte intermittente",
        220: "Neige faible intermittente",
        221: "Neige modérée intermittente",
        222: "Neige forte intermittente",
        230: "Pluie et neige mêlées",
        231: "Pluie et neige mêlées",
        232: "Pluie et neige mêlées",
        235: "Averses de grêle",
    }

    fetch("./data.json")
        .then((res) => {
            return res.json();
        })
        .then((response) => loadCard(response));


    // $("body").mousedown(function(e) {
    //     alert(e.pageY + " - " + e.pageX);
    // })
});

function loadCard(response) {
    const card = document.getElementById('card');

    for (const dataCity of response.datas) {

        //fetch("https://api.meteo-concept.com/api/forecast/daily?token=3d9681282fcc327f4d3a638bf05545435e6b5cfeeb7da4bb8a7dba4cee9e8d4f&insee=" + dataCity.insee)
        fetch("./brest.json")
            .then((res) => {
                return res.json();
            })
            .then((weatherCity) => addWeatherCity(weatherCity, dataCity));


    }
}

function addWeatherCity(weartherVille, dataCity) {

    if (!dataCity.top) return;

    // Creation d'une div de ville
    var ville = document.createElement('div');
    ville.id = dataCity.nom;
    ville.style.position = "absolute";
    ville.style.display = "flex";
    ville.style.flexDirection = "column";
    ville.style.alignItems = "center";
    ville.style.top = dataCity.top;
    ville.style.left = dataCity.left;
    const imgWeather = getImgWeather(weartherVille.forecast[0].weather);
    let weatherContent = "<div style=\"display: flex; flex-direction: column; align-items: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\">" +
        "<img src=\"assets/img/" + imgWeather + "\" />" +
        "<span style=\"margin-top: -15px; font-weight: bold\">" +
            "<span style=\"color: blue\">" + weartherVille.forecast[0].tmin + "</span> / " +
            "<span style=\"color: #e01313\">" + weartherVille.forecast[0].tmax + "</span></span>" +
        "<!--<span style=\"margin-top: -5px; font-weight: bold\">" + dataCity.nom + "</span>--></div>";
    ville.innerHTML = weatherContent;

    $('[id=card]').append(ville);
}

function getImgWeather(indexWeather) {
    if (indexWeather == 0) {
        return "day.svg";
    } else if (indexWeather >= 1 && indexWeather <= 5) {
        return "cloudy-day-1.svg";
    } else if (indexWeather >= 10 && indexWeather <= 15 || indexWeather >= 30 && indexWeather <= 48 || indexWeather >= 70 && indexWeather <= 78 || indexWeather == 140 || indexWeather == 141 || indexWeather == 210 || indexWeather == 211 || indexWeather == 212 || indexWeather == 230 || indexWeather == 231 || indexWeather == 232) {
        return "rainy-5.svg";
    } else if (indexWeather >= 60 && indexWeather <= 68 || indexWeather == 20 || indexWeather == 21 || indexWeather == 22 || indexWeather == 142 || indexWeather == 220 || indexWeather == 221 || indexWeather == 222) {
        return "snowy-5.svg";
    } else if (indexWeather >= 100 && indexWeather <= 138) {
        return "thunder.svg";
    } else {
        return "day.svg";
    }
}

function createSvg() {
    htmlToImage.toSvg(document.getElementById('card'))
        .then(function (dataUrl) {
            let svg = decodeURIComponent(dataUrl.split(',')[1]);
            download(svg, "meteo5.svg", "image/svg+xml");
        });
}

function download(content, filename, contentType) {
    if(!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], {'type':contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
