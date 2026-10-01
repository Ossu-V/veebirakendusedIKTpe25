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

    let jahei="";
    if(jah.checked){
        jahei=jah.value;
    }
    else if(ei.checked){
        jahei=ei.value;
    }
    else{
        jahei="palun vali arvamus";
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

function tervitus(){
    let vastus4=document.getElementById("vastus4");
    let arvamus=arvamusLugemine();
    let jahei=jaheiValik();
    let muusika=muusikaValik();

    vastus4.innerHTML='Sinu arvamus: ' + arvamus + "<br>"
        + 'Raadio kuulamine: ' + jahei + "<br>"
        + 'Valitud stiil(id): ' + muusika;
}

function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}