function saiaKalk(){
    let vastus=document.getElementById("vastus");
    let saiatyyp=document.getElementById("saiatyyp");
    const juustu=2.00;
    const mooni=1.50;
    const pontsik=3.00;
    const kaneeli=1.30;
    let kogus=document.getElementById("kogus");
    let pilt=document.getElementById("pilt");

    //if valikud selectedIndex
    //1.rida selectedIndex = 0
    if(saiatyyp.selectedIndex===0){
        vastus.innerHTML="palunk vali saia tüüp!";
        vastus.style.color="red";
        pilt.src="https://f8.pmo.ee/-4W05qwslxmClq0-9wctL2Cg8b8=/1200x630/filters:format(webp)/nginx/o/2014/08/04/3252979t1h9935.jpg"
    }
    if(saiatyyp.selectedIndex===1){
        vastus.innerHTML=
            "Sa valisid " + saiatyyp.value + '<br>'+
            "Valitud kogus on " + kogus.value + "tk" + '<br>' +
            "Kokku hind on " +mooni*kogus.value + "€";
        vastus.style.color="blue";
        pilt.src="https://peetrikook.ee/storage/moonisai.png"
    }
    if(saiatyyp.selectedIndex===2){
        vastus.innerHTML=juustu*kogus.value+"€";
        vastus.style.color="blue";
        pilt.src="https://erlandia.ee/wp-content/uploads/2024/05/Juustusai.png"
    }
    if(saiatyyp.selectedIndex===3){
        vastus.innerHTML=pontsik*kogus.value+"€";
        vastus.style.color="blue";
        pilt.src="https://martapagar.ee/wp-content/uploads/2020/04/pontsikud.jpg"
    }
    if(saiatyyp.selectedIndex===4){
        //toFixed ümardab(2) - ümardab 2 kohta peale koma
        vastus.innerHTML=(kaneeli*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://cdn.barbora.ee/products/3750936f-e37c-4c7e-b51d-beb9e7b409f2_m.png"
    }
}