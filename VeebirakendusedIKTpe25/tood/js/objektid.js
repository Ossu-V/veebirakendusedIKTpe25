/*
let auto = {
    mark: "Toyota",
    mudel: "Corolla",
    aasta: 2022,
    varv: "punane",
    lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
};

//Väljastamiseks trüki välja kogu objekt:

    console.log(auto);

let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi: function() {
        return this.mark + " " + this.mudel;
    }
};

console.log(auto.taisnimi());

let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

auto.kuvaOmadused();


let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

//console.log(autod);
//console.log(autod[0]);
console.log(autod[0].mark);


let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];


autod.forEach((auto) => {
    console.log(`
    Mark: ${auto.mark},
    Mudel: ${auto.mudel},
    Aasta: ${auto.aasta}
    `);
});

let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

// Lisab uue objekti massiivi lõppu
autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });

// Lisab uue objekti massiivi algusesse (KORRIGEERITUD rida)
autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });


// Eemaldab esimese objekti (KORRIGEERITUD ilma start/deleteCount tekstita)
autod.splice(0, 1);

// Lisab objekti alates teisest indeksist, ei kustutata midagi
autod.splice(1, 0, { mark: 'Audi', mudel: 'A4', aasta: 2018 });

//Otsimine
//let otsing = autod.find(auto=>auto.aasta > 2018);
//console.log(otsing);

//Otsimine
let otsing = autod.find(auto=>auto.aasta > 2018 && auto.mark === "Tesla");
console.log(otsing);

let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtreeritud = arvud.filter(arv => arv % 2 === 0);
console.log(filtreeritud);

//Filtreerimine
let filter = autod.filter(auto=>auto.aasta > 2018);
console.log(filter);

autod.sort((a, b) => a.aasta - b.aasta);
console.log(autod);
*/

