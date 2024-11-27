// Fonction pour afficher ou masquer la solution
function toggleSolution(solutionId) {
    var solution = document.getElementById(solutionId);
    if (solution.style.display === "none") {
        solution.style.display = "block";
    } else {
        solution.style.display = "none";
    }
}

// Fonction pour afficher ou masquer la démonstration
function toggleDemo(demoId) {
    var demo = document.getElementById(demoId);
    if (demo.style.display === "none") {
        demo.style.display = "block";
    } else {
        demo.style.display = "none";
    }
}

// Fonction pour calculer la somme
function showSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById('result').textContent = "La somme est : " + sum;
}

