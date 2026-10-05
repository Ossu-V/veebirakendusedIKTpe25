function arvamusLugemine(){
    let  arvamus=document.getElementById("arvamus");
    let  vastus1=document.getElementById("vastus1");

    vastus1.innerHTML="Sinu arvamus: " + arvamus.value;

    return arvamus.value;
}

function jaheiValik(){
    let vastus2=document.getElementById("vastus2");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let pilt=document.getElementById("pilt");

    let jahei="";
    if(jah.checked){
        jahei=jah.value;
        pilt.src="../pildid/Smiley.png";
    }
    else if(ei.checked){
        jahei=ei.value;
        pilt.src="../pildid/Frowning.png";
    }
    else{
        jahei="palun vali arvamus";
        pilt.src="../pildid/tyhi.png";
    }

    vastus2.innerHTML="Raadio kuulamine: " + jahei;

    return jahei;
}

function muusikaValik(){
    let vastus3=document.getElementById("vastus3");
    let rock=document.getElementById("rock");
    let rap=document.getElementById("rap");
    let Classical=document.getElementById("Classical");
    let hiphop=document.getElementById("hiphop");
    let lofi=document.getElementById("lofi");
    let jazz=document.getElementById("jazz");

    let muusika="";
    if(rock.checked){
        muusika +=rock.value + ", ";
    }
    if(rap.checked){
        muusika +=rap.value + ", ";
    }
    if(Classical.checked){
        muusika +=Classical.value + ", ";
    }
    if(hiphop.checked){
        muusika +=hiphop.value + ", ";
    }
    if(lofi.checked){
        muusika +=lofi.value + ", ";
    }
    if(jazz.checked){
        muusika +=jazz.value + ", ";
    }

    if(muusika==""){
        muusika="sa ei kuula muusikat";
    }
    vastus3.innerHTML="Sinu vastus: " + muusika;

    return muusika;
}

function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let kuulamine=document.getElementById("kuulamine");

    vastus4.innerHTML="Sa kuulad muusikat " + kuulamine.value + " tundi päevas";

    return kuulamine.value;
}

function muusikuteValik(){
    let vastus5=document.getElementById("vastus5");
    let Nublu=document.getElementById("Nublu");
    let TommyCash=document.getElementById("TommyCash");
    let ElinaBorn=document.getElementById("ElinaBorn");
    let KoitToome=document.getElementById("KoitToome");
    let Lenna=document.getElementById("Lenna");
    let pilt2=document.getElementById("pilt2");

    let muusikud="";
    if(Nublu.checked){
        muusikud +=Nublu.value + ", ";
        pilt2.src="../pildid/nublu.png";
    }
    if(TommyCash.checked){
        muusikud +=TommyCash.value + ", ";
        pilt2.src="../pildid/tommycash.png";
    }
    if(ElinaBorn.checked){
        muusikud +=ElinaBorn.value + ", ";
        pilt2.src="../pildid/elinaborn.jpg";
    }
    if(KoitToome.checked){
        muusikud +=KoitToome.value + ", ";
        pilt2.src="../pildid/koittoome.jpg";
    }
    if(Lenna.checked){
        muusikud +=Lenna.value + ", ";
        pilt2.src="../pildid/lenna.jpg";
    }
    if(muusikud==""){
        muusikud="sa ei tea muusikuid/ansambleid";
        pilt2.src="../pildid/tyhi.png";
    }
    vastus5.innerHTML="Sinu valitud muusik(ud): " + muusikud;

    return muusikud;
}

function tervitus(){
    let vastus6=document.getElementById("vastus6");
    let arvamus=arvamusLugemine();
    let jahei=jaheiValik();
    let muusika=muusikaValik();
    let kuulamine=rangeValik();
    let muusikud=muusikuteValik();

    vastus6.innerHTML='Sinu arvamus: ' + arvamus + "<br>"
        + 'Raadio kuulamine: ' + jahei + "<br>"
        + 'Valitud stiil(id): ' + muusika + "<br>"
        + 'Kuulad muusikat ' + kuulamine + ' tundi ' + "<br>"
        + 'Sinu valitud muusikud ' + muusikud;
}

function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
}