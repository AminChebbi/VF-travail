function calculer(argument){
    var a = document.getElementById("p1").value;
    var b = document.getElementById("q1").value;
    var c = Number(a) * Number(b);
    document.getElementById("r1").value = c;

    var a = document.getElementById("p2").value;
    var b = document.getElementById("q2").value;
    var c = Number(a) * Number(b);
    document.getElementById("r3").value = c;

    var a = document.getElementById("p3").value;
    var b = document.getElementById("q3").value;
    var c = Number(a) * Number(b);
    document.getElementById("r1").value = c;

    var a = document.getElementById("r1").value;
    var b = document.getElementById("r2").value;
    var c = document.getElementById("r3").value;
    var d = Number(a) * Number(b) * Number(c)
    document.getElementById("r1").value = d;

}