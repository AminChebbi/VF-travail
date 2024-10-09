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