import fs from 'node:fs';

const generateJsFile = function () {
    const content = `
console.log('teszt');
`
    fs.writeFileSync('./vernyomasok/public/test.js', content);
    console.log('lefutott')
};

generateJsFile();