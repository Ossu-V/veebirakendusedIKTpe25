//Sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }

}

function puhasta(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}

//Kolmnurk
function kolmnurk(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green"; //taust
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50); //lõpppunkt
        t.stroke();
        t.fill();
    }
}

//Ristkülik
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="olive";
        t.fillRect(100,50,laius.value,korgus.value); //alguspunkt - x, y, laius, kõrgus
    }
}

//Ring
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle=varv.value;
        t.arc(100,50,r.value,0,2*Math.PI, true); //alguspunkt - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

//Nägu
function nagu(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius2");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.arc(150,200,r.value,0,2*Math.PI, true); //alguspunkt - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

