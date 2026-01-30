A web-es alkalmazásokhoz hasznos teszt adatokkal dolgozni. Azonban: 
A retool és hasonló eszközök külső függőségek, használati korlátokkal
Kevésbé szabható személyre
Sokszor nem tudnak magyarul
Ezért most generáljunk teszt adatokat magunknak!

Kövesd a feladat lépéseit! 
Készíts egy vite-es projektet, "vérnyomások" néven. 
Tedd git alá
Készíts egy konzolos scriptet, general.js néven. A feladata, hogy a public mappában létrehozzon egy test.js fájt. A scriptben:
Vegyél fel egy üres tömböt
Töltsd fel objektumokal. Minden objektumnak legyen egy név és egy vérnyomás adattagja, amit véletlenszerűen határozz meg. A név generálásához párosíts gyakori magyar vezeték- és keresztneveket.
A listát konvertáld JSON szöveggé, mentsd el public/test.json néven. 
A general.js is a projektben legyen, de NEM kell a HTML fajból hivatkozni rá, nem része a weboldalának.

Utána készíts egy egyszerű web alkalmazást, amely az adatokat letölti (fetch), táblázatosan megjeleníti (bootstrap formázással)