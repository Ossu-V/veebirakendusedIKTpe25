function arvamusLugemine(){
    let  arvamus=document.getElementById("arvamus");
    let  vastus=document.getElementById("vastus");

    vastus.innerHTML="Sinu arvamus: " + arvamus.value;
}

function jaheiValik(){
    let vastus2=document.getElementById("vastus2");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    let jahei="";
    if(jah.checked){
        jahei +=jah.value + ", ";
    }
    if(ei.checked){
        jahei +=ei.value + ", ";
    }

    vastus2.innerHTML="Raadio kuulamine: " + jahei.value;
}
