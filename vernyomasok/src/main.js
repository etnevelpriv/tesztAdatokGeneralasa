import '../src/style.css';

const fetchVernyomasok = async function () {
    try {
        const resp = await fetch('./test.json');
        if (!resp.ok) {
            throw new Error(`${resp.status}, ${resp.statusText}, ${resp.url}`);
        };
        const data = await resp.json();
        displayDataTable(data);
    } catch (err) {
        throw new Error(err);
    };
};

const displayDataTable = function (arr) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-dark', 'table-striped');
    document.body.appendChild(table);
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const headerTr = document.createElement('tr');
    thead.appendChild(headerTr);
    const th1 = document.createElement('th');
    th1.textContent = 'Név';
    headerTr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.textContent = 'Vérnyomás';
    headerTr.appendChild(th2);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    arr.forEach(element => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const td1 = document.createElement('td');
        td1.textContent = element.nev;
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        td2.textContent = element.vernyomas;
        tr.appendChild(td2);
    });
};

fetchVernyomasok();