import fs from 'node:fs';

const randomNevGeneralas = function () {

};

const randomVernyomasGeneralas = function () {

};

const arrayGeneralas = function () {
    const arr = [];
    for ( let i = 0; i < 100; i++) {
        const obj = {
            nev : randomNevGeneralas(),
            vernyomas : randomVernyomasGeneralas()
        };
        arr.push(obj);
    };
};

const arrayMenteseJSONFormatumban = function () {

};

arrayGeneralas();