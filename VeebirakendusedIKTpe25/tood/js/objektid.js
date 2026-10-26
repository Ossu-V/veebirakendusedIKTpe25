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

//1. Loodud objekt raamat
let raamat = { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926,

    //2. Meetod, mis kuvab raamatu kirjelduse
    kuvaKirjeldus: function() {
        console.log("Raamat: " + this.pealkiri + ", Autor: " + this.autor + ", Aasta: " + this.aasta);
    },

    //3. Meetod, mis muudab väljaandmise aasta
    muudaAastat: function(uusAasta) {
        this.aasta = uusAasta;
    }
};

//2. Kuvab raamatu kirjelduse
raamat.kuvaKirjeldus();
//3. Muudab väljandamise aasta
raamat.muudaAastat(1930);

//3. Prindib tulemuse konsooli
console.log(raamat);
 */

let raamatukogu = {
    //1. Objekt raamatukogu
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Harry Potter ja tarkade kivi", autor: "J.K. Rowling", aasta: 1997 },
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Serafima ja Bogdan", autor: "Vahur Afanasjev", aasta: 2017 }
    ],

    //2. Raamatu kuvamise meetod
    kuvaRaamatud: function() {
        console.log("Raamatukogu nimekiri");
        for (let r of this.raamatud) {
            console.log(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
        }
    },

    //3. Raamatu lisamise meetod
    lisaRaamat: function(uusPealkiri, uusAutor, uusAasta) {
        let uusRaamat = { pealkiri: uusPealkiri, autor: uusAutor, aasta: uusAasta };
        this.raamatud.push(uusRaamat);
        console.log("Lisatud uus raamat: " + uusPealkiri);
    },

    //4. Meetod, mis kuvab raamatute koguarvu
    kuvaKoguarv: function() {
        console.log("Raamatute koguarv raamatukogus: " + this.raamatud.length);
    },

    //5. Meetod, mis arvutab mitu raamatud on ilmunud pärast 2000. aastat
    loendaUuedRaamatud: function() {
        let loendur = 0;

        for (let r of this.raamatud) {
            if (r.aasta > 2000) {
                loendur = loendur + 1; // või loendur++;
            }
        }

        console.log("Pärast 2000. aastat ilmunud raamatuid: " + loendur);
    },

    //6. Oma meetod, tühjendab raamatukogu
    tuhjendaRaamatukogu: function() {
        this.raamatud = [];
        console.log("Raamatukogu on nüüd täiesti tühi!");
    }
};

//2. Kuvab raamatud
raamatukogu.kuvaRaamatud();
//3. Lisab raamatud
raamatukogu.lisaRaamat("Mees, kes teadis ussisõnu", "Andrus Kivirähk", 2007 );
//4. Kuvab raamatute koguarvu
raamatukogu.kuvaKoguarv();
//5. Loendab raamatud kokku mis on ilmunud pärast 2000. aastat
raamatukogu.loendaUuedRaamatud();
//6. Tühjendab raamatukogu
raamatukogu.tuhjendaRaamatukogu();
raamatukogu.kuvaKoguarv();