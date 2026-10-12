function valuutaKalk(){
    let vastus3 = document.getElementById("vastus3");
    let euro = document.getElementById("euro").value;
    let valuuta = document.getElementById("valuuta").value;

    const dollar= 1.12;
    const juann= 7.4992;
    const lyra= 55.30;
    const pound= 1.18;

    if(valuuta == "dollar"){
        vastus3.innerHTML = euro + "€ = " +
            (euro * dollar).toFixed(2) + "$";
    }
    if(valuuta == "juann"){
        vastus3.innerHTML = euro + "€ = " +
            (euro * juann).toFixed(2) + " ¥";
    }
    if(valuuta == "lyra"){
        vastus3.innerHTML = euro + "€ = " +
            (euro * lyra).toFixed(2) + " ₺";
    }
    if(valuuta == "pound"){
        vastus3.innerHTML = euro + "€ = " +
            (euro * pound).toFixed(2) + " £";
    }
    if (valuuta == ""){
        vastus3.innerHTML = "Sisesta valuuta";
    }
}