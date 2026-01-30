import './style.css';

const fetchVernyomasok = async function () {
    try {
        const resp = await fetch('./test.json');
        const data = await resp.text();
        console.log(data);
    } catch (err){
        throw new Error(err);
    };
};

fetchVernyomasok();