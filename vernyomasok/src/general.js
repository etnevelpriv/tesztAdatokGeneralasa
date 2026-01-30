import fs from 'node:fs';

const generateJsFile = function () {
    const content = `
const arr = [];
`
    fs.writeFileSync('./vernyomasok/public/test.js', content);
    console.log('lefutott')
};

generateJsFile();