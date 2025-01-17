function calcul(){
    var a = document.getElementById("prix1").value;
    var b = document.getElementById("quantité1").value;
    var c = Number(a) * Number(b);

    result1.value = c;
    
    var a2 = document.getElementById("prix2").value;
    var b2 = document.getElementById("quantité2").value;
    var c2 = Number(a2) * Number(b2);

    result2.value = c2;

    var a3 = document.getElementById("prix3").value;
    var b3 = document.getElementById("quantité3").value;
    var c3 = Number(a3) * Number(b3);

    result3.value = c3;

    var a4 = document.getElementById("prix4").value;
    var b4 = document.getElementById("quantité4").value;
    var c4 = Number(a4) * Number(b4);

    result4.value = c4;
    
    total = Number(c) + (c2) + (c3) + (c4);
    resultTotal.value = total

}
function reinitialiser() {
    prix1.value = ""; quantité1.value = "";
    prix2.value = ""; quantité2.value = "";
    prix3.value = ""; quantité3.value = "";
    prix4.value = ""; quantité4.value = "";

    result1.value = "";
    result2.value = "";
    result3.value = "";
    result4.value ="";
    resultTotal.value = "";
}


