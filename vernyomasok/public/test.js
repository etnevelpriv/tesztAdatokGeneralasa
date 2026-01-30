

import fs from 'node:fs';
import { json } from 'node:stream/consumers';

const randomNevGeneralas = function () {
    // AI-al generaltattam a tomboket
    const keresztnevek = [
        'János', 'Maria', 'István', 'Anna', 'Péter', 'Katalin', 'Pál', 'Erzsébet',
        'Márton', 'Barbara', 'Ferenc', 'Éva', 'László', 'Ilona', 'Sándor', 'Margit',
        'Miklós', 'Zsuzsanna', 'György', 'Kinga', 'Róbert', 'Klara', 'Gábor', 'Júlia',
        'Tamás', 'Csilla', 'Lajos', 'Bernadett', 'Balázs', 'Adrienn', 'Zoltán', 'Krisztina',
        'József', 'Nikolett', 'Dénes', 'Patrícia', 'Guszta', 'Beáta', 'Vilmos', 'Rebeka',
        'Antal', 'Mónika', 'Henrik', 'Héléna', 'Géza', 'Melinda', 'Gyula', 'Ramona',
        'Oszkár', 'Renáta', 'Emil', 'Valéria', 'Sándor', 'Vivien', 'Arnold', 'Ágnes',
        'Béla', 'Annamária', 'Frigyes', 'Beatrix', 'Attila', 'Erika', 'Róbert', 'Flóra',
        'Flórián', 'Gabriella', 'Károlyi', 'Hortenzia', 'Leopold', 'Irma', 'Matyas', 'Judit',
        'Nándor', 'Kornélia', 'Ödön', 'Leila', 'Pünkösti', 'Mária', 'Quentin', 'Nóra',
        'Róland', 'Olga', 'Sándorné', 'Petra', 'Tivadar', 'Pia', 'Ursuly', 'Rozália',
        'Valentiny', 'Sarolta', 'Wendel', 'Teodóra', 'Xavér', 'Urszula', 'Yvan', 'Vanda',
        'Zénó', 'Xénia', 'Ábrahám', 'Yolanda', 'Bence', 'Zója', 'Csongor', 'Ágota'
    ];
    const vezeteknekvek = [
        'Nagy', 'Kovács', 'Tóth', 'Szalay', 'Kiss', 'Horváth', 'Nagy-Kiss', 'Simon',
        'Molnár', 'Gulyás', 'Bakos', 'Farkas', 'Deutsch', 'Kővári', 'Lakatos', 'Lipóczi',
        'Makó', 'Nagykárolyi', 'Oravecz', 'Pozsonyi', 'Rátz', 'Sándor', 'Tóth-Nagy', 'Urbán',
        'Varga', 'Vass', 'Weisz', 'Xántus', 'Ynesi', 'Zachar', 'Szabó', 'Antal',
        'Balogh', 'Bánffy', 'Bárány', 'Bertók', 'Bodnár', 'Bogár', 'Bolyai', 'Bornemissza',
        'Botka', 'Böszörményi', 'Bruckner', 'Buday', 'Budavári', 'Budai', 'Budakeszi', 'Bukarest',
        'Cseh', 'Csépai', 'Csiky', 'Csincsi', 'Csóka', 'Csúcs', 'Czigány', 'Czollner',
        'Dajka', 'Daróczy', 'Davidovics', 'Deáky', 'Debreczeni', 'Décsi', 'Dekker', 'Dél',
        'Delonga', 'Demény', 'Demel', 'Deme', 'Demeter', 'Dénosi', 'Depdolla', 'Dési',
        'Despotovics', 'Dessy', 'Dezső', 'Dezső-Nagy', 'Dienes', 'Diósgyőr', 'Dobos', 'Dobrossy',
        'Dóczi', 'Dócsai', 'Dóczy', 'Döbrentei', 'Döbrényi', 'Dömötöri', 'Döms', 'Dönci',
        'Dönges', 'Döppes', 'Dörnyei', 'Döröghy', 'Dörömbözi', 'Dóry', 'Dosai', 'Döség',
        'Dotsó', 'Dováry', 'Dövecz', 'Dövecsényi', 'Dövecskes', 'Dövecz-Nagy', 'Dovácz', 'Döves'
    ];

    const vezeteknev = vezeteknekvek[Math.floor(Math.random() * vezeteknekvek.length) + 1];
    const keresztnev = keresztnevek[Math.floor(Math.random() * keresztnevek.length) + 1];

    return (`${vezeteknev} ${keresztnev}`);
};

const randomVernyomasGeneralas = function () {
    const vernyomasELsoSzam = Math.floor(Math.random() * 100) + 80;
    const vernyomasMasodikSzam = Math.floor(Math.random() * 70) + 50;
    return (`${vernyomasELsoSzam}/${vernyomasMasodikSzam}`);
};

const arrayGeneralas = function () {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        const obj = {
            nev: randomNevGeneralas(),
            vernyomas: randomVernyomasGeneralas()
        };
        arr.push(obj);
    };
    console.log(arr)
    arrayMenteseJSONFormatumban(arr);
};

const arrayMenteseJSONFormatumban = function (arr) {
    fs.writeFileSync('./vernyomasok/public/test.json', JSON.stringify(arr));
};

arrayGeneralas();

