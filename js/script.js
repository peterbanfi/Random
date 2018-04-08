let names = [
    "Bánfi Péter",
    "Bőle Zsombor",
    "Dubéczi Linda",
    "Ertsey Réka",
    "Hajkó Balázs",
    "Kecskés Richárd Ákos",
    "Kovács Alfréd",
    "Kováts Olivér",
    "Mihály Tamás",
    "Najdeh Maruán",
    "Oberth Zoltán Zsigmond",
    "Oláh Péter Ciprián",
    "Pataki Donát",
    "Rubi Márton",
    "Szarka Péter",
    "Szász Kinga",
    "Szegedi Dániel",
    "Szücs Máté",
    "Tóth-Gayer Andrea"
];
let opinions = [
    "Nagyszerű ember, örülök, hogy megismertem!",
    "Kitartó és szenvedélyes a munkájában.",
    "Lendületes és motiváló személy.",
    "Kreatív ötletei vannak, mindig meg tud lepni.",
    "Szeretek vele csapatban dolgozni, igazi csapattárs.",
    "Csak jókat tudok mondani róla.",
    "Mindig jókedélyű, és koncentrált, öröm vele együtt dolgozni.",
    "Nagyon segítőkész, ha kérdésem van mindig fordulhatok hozzá.",
    "Mindig nyitott más ötleteire, könnyű vele dolgozni.",
    "Ötletes, mindig ki tud találni valami megoldást.",
    "Kommunikatív, könnyű vele megtalálni a közös hangot.",
    "Széles körben tájékozott, nincs olyan téma amihez ne tudna hozzá szólni.",
    "Nagyon humoros, de közben érti is a dolgát!",
    "Rendkívül intelligens, öröm a közelében lenni.",
    "Optimista és ezt ránk is ragasztja, jó a közelében lenni.",
    "Mindig energikus, hosszan képes elmélyülten dolgozni.",
    "Magabiztos, határozott.",
    "Mindig tartja a szavát, megbízható.",
    "Jó a helyzetfelismerő képessége, gyorsan alkalmazkodik.",
];
let chosenOpinionIndex;
let usedIndexes = [];


function randomOpinions() {
    // generate numbers
    for (let i = 0; i < opinions.length; i++) {
        usedIndexes.push(i);
    }
    // randomize the order
    usedIndexes.sort(function (a, b) {
        return 0.5 - Math.random()
    });
}

function generateTable() {
    randomOpinions();
    let table = '';
    for (var i = 0; i < names.length; i++) {
        table += `
        <tr>
            <td scope="row">${i+1}</th>
            <td>${names[i]}</th>
            <td>${opinions[usedIndexes[i]]}</td>
        </tr>`;
    }
    table += '</tbody>';
    document.querySelector('#opinions tbody').innerHTML = table;
    document.getElementById('opinions').style.opacity = '1';
    usedIndexes = [];
}