function test_age() {
    let age = prompt("Quelle est votre age ? ")
    if (age<18) 
        {
            alert(" Attention accès refuser vous etes mineur");
            document.body.style.backgroundColor = "red";
        }
        else
        {
            alert(" OK, vous êtes Majeur");
            document.body.style.backgroundColor = "green";
        } 
}
function test_couleur() {
    let couleur = prompt ("donner une couleur");
    if (couleur == "rouge") {
        document.body.style.backgroundColor ="red";
    }
    else if (couleur == "bleu") {
        document.body.style.backgroundColor ="blue";
    }
    else if (couleur == "vert") {
        document.body.style.backgroundColor ="green";
    }
    else {
        alert("couleur non comprise");
    }

}
function affichage() {
    let prenom = prompt("saisir votre prenom");
    let nom = prompt("saisir votre nom");
    document.write("<div style='background-color : yellow; border:5px solid blue; width: 400px; height: auto; margin: auto; font-size:2em;'>")
    document.write ("bonjour "+ prenom + "  " + nom);
    document.write ("</div>");
}
function calcul_moyenne() {
    var n1 = prompt("Donner la premiere note: ")
    var n2 = prompt("Donner la deuxième note: ")
    var n3 = prompt("Donner la troisième note: ")

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("voici la somme : " + somme + "<br>");
    var moyenne = somme/3;
    let moyenneFormatee = moyenne.toFixed(2);
    document.write("voici la moyenne : " + moyenneFormatee + "<br>");
    
    if (moyenne>10) {
        document.write("ADMIS");
    }
    else {
        document.write("REFUSER")
    }
}