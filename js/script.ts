names = [
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

opinions = [
    "Nagyszerű ember, örülök, hogy megismertem!",
    "Kitartó és szenvedélyes a munkájában.",
    "Lendületes és motiváló személy.",
    "Kreatív ötletei vannak, mindig meg tud lepni.",
    "Szeretek vele csapatban dolgozni, igazi csapattárs.",
    "Csak jókat tudok mondani róla.",
    "Mindig jókedélyű, és koncentrált, öröm vele együtt dolgozni.",
    "Nagyon segítőkész, ha kérdésem van mindig fordulhatok hozzá.",
    "Mindig nyitott más ötleteire, könnyű vele dolgozni.",
    "Ötletes, mindig ki tud találni valami megldást.",
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

usedIndexes = [];


function randomOpinions(param: any) {
    //let chosenOpinion = Math.floor((Math.random()*opinions.length-1));
    return param;
}


interface Data {
    opinions: Array<string>,
    names: Array<string>,
    usedIndexes: Array<any>,

}