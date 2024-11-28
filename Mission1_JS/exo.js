// Fonction pour afficher ou cacher la solution
function toggleSolution(id) {
    var solution = document.getElementById(id);
    solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
}

// Fonction pour afficher ou cacher la démonstration
function toggleDemo(id) {
    var demo = document.getElementById(id);
    demo.style.display = demo.style.display === 'none' ? 'block' : 'none';
}

// Exercice 1: Addition de deux nombres
function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1_1").value);
    var num2 = parseFloat(document.getElementById("num2_1").value);
    var result = num1 + num2;
    document.getElementById("result_1").innerText = "Le résultat est : " + result;
}

// Exercice 2: Multiplication de deux nombres
function calculateProduct() {
    var num1 = parseFloat(document.getElementById("num1_2").value);
    var num2 = parseFloat(document.getElementById("num2_2").value);
    var result = num1 * num2;
    document.getElementById("result_2").innerText = "Le résultat est : " + result;
}

// Exercice 3: Soustraction de deux nombres
function calculateDifference() {
    var num1 = parseFloat(document.getElementById("num1_3").value);
    var num2 = parseFloat(document.getElementById("num2_3").value);
    var result = num1 - num2;
    document.getElementById("result_3").innerText = "Le résultat est : " + result;
}

// Exercice 4: Division de deux nombres
function calculateQuotient() {
    var num1 = parseFloat(document.getElementById("num1_4").value);
    var num2 = parseFloat(document.getElementById("num2_4").value);
    if (num2 === 0) {
        document.getElementById("result_4").innerText = "Erreur : Division par zéro!";
    } else {
        var result = num1 / num2;
        document.getElementById("result_4").innerText = "Le résultat est : " + result;
    }
}

// Exercice 5: Trouver le maximum
function calculateMax() {
    var num1 = parseFloat(document.getElementById("num1_5").value);
    var num2 = parseFloat(document.getElementById("num2_5").value);
    var result = Math.max(num1, num2);
    document.getElementById("result_5").innerText = "Le maximum est : " + result;
}

// Exercice 6: Vérifier un nombre pair
function checkEven() {
    var num = parseInt(document.getElementById("num1_6").value);
    var result = num % 2 === 0 ? "Le nombre est pair" : "Le nombre est impair";
    document.getElementById("result_6").innerText = result;
}

function generatePyramidDemo() {
    const height = parseInt(document.getElementById('height7').value);
    if (isNaN(height) || height < 1) {
        document.getElementById('result_7').innerText = "Veuillez entrer une hauteur valide.";
        return;
    }
    const pyramid = generatePyramid(height);
    document.getElementById('result_7').innerText = pyramid;
}
function generatePyramid(height) {
    let pyramidStr = '';
    for (let i = 1; i <= height; i++) {
        pyramidStr += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return pyramidStr;
}

// Exercice 8: Calculer la puissance
function calculatePower() {
    var base = parseFloat(document.getElementById("base8").value);
    var exponent = parseFloat(document.getElementById("exponent8").value);
    var result = base ** exponent;
    document.getElementById("result_8").innerText = "Le résultat est : " + result;
}

// Exercice 9: Vérifier une chaîne palindrome
function checkPalindrome() {
    var str = document.getElementById("text9").value;
    var reversed = str.split('').reverse().join('');
    var result = str === reversed ? "C'est un palindrome" : "Ce n'est pas un palindrome";
    document.getElementById("result_9").innerText = result;
}

// Exercice 10: Somme des nombres dans un tableau
function calculateArraySum() {
    var arr = document.getElementById("array10").value.split(',').map(Number);
    var result = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById("result_10").innerText = "La somme est : " + result;
}

// Exercice 11: Nombre aléatoire entre deux valeurs
function generateRandom() {
    var min = parseInt(document.getElementById("min11").value);
    var max = parseInt(document.getElementById("max11").value);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result_11").innerText = "Le nombre aléatoire est : " + result;
}

// Exercice 12: Trier un tableau
function sortArray() {
    var arr = document.getElementById("array12").value.split(',').map(Number);
    arr.sort((a, b) => a - b);
    document.getElementById("result_12").innerText = "Le tableau trié est : " + arr.join(', ');
}

// Exercice 13: Trouver la valeur minimale
function findMinimum() {
    var arr = document.getElementById("array13").value.split(',').map(Number);
    var result = Math.min(...arr);
    document.getElementById("result_13").innerText = "La valeur minimale est : " + result;
}

// Exercice 14: Compter les voyelles
function countVowel() {
    var str = document.getElementById("text14").value;
    var result = (str.match(/[aeiouAEIOU]/g) || []).length;
    document.getElementById("result_14").innerText = "Le nombre de voyelles est : " + result;
}

// Exercice 15: Calculer la factorielle
function calculateFactorial() {
    var num = parseInt(document.getElementById("num15").value);
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    var result = factorial(num);
    document.getElementById("result_15").innerText = "La factorielle de " + num + " est : " + result;
}
