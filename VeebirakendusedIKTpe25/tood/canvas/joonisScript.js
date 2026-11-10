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

//pilt failist //drawImage()
function pilt(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        const fail=new Image();
        fail.src="https://static.vecteezy.com/system/resources/thumbnails/022/917/027/small_2x/yellow-happy-smile-face-emoticon-png.png";
        fail.onload=()=>{
            t.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

//Nägu
function nagu(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius2");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");

        //nägu
        t.beginPath();
        t.fillStyle="yellow";
        t.arc(150,200,100,0,2*Math.PI, true); //alguspunkt - x, y, raadius, 2*180kraadi
        t.fill();

        //vasak silm
        t.beginPath();
        t.fillStyle="black";
        t.arc(100,170,25,0,2*Math.PI, true);
        t.fill();

        //parem silm
        t.beginPath();
        t.fillStyle="black";
        t.arc(200,170,25,0,2*Math.PI, true);
        t.fill();
    }
}

function suu(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //suu
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth = 2;
        t.moveTo(100, 240); // Alguspunkt vasakul
        t.lineTo(200, 240); // Lõpppunkt paremal
        t.stroke();
    }
}

function korvad(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(25,150,30, 50); //alguspunkt - x, y, laius, kõrgus
    }

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(245,150,30, 50); //alguspunkt - x, y, laius, kõrgus
    }
}

function nina(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="black";
        t.fillRect(140,200,20, 35); //alguspunkt - x, y, laius, kõrgus
    }
}


function smile(){
    puhasta();
    nagu();
    suu();
    korvad();
    nina();
}

