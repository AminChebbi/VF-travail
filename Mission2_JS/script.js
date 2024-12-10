// Réponses correctes pour chaque question
const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "b",
    q4: "b",
    q5: "a",
    q6: "b",
    q7: "b",
    q8: "b",
    q9: "a",
    q10: ["a", "d"] // Pour la question 10, plusieurs réponses
};

// Fonction pour vérifier une réponse individuelle
function checkAnswer(questionId) {
    const selectedAnswers = document.querySelectorAll(`input[name="${questionId}"]:checked`);
    const correctAnswer = correctAnswers[questionId];
    let feedbackMessage = "";

    if (selectedAnswers.length > 0) {
        const selectedValues = Array.from(selectedAnswers).map(input => input.value);

        if (Array.isArray(correctAnswer)) { // Cas de réponses multiples
            const isCorrect = correctAnswer.every(val => selectedValues.includes(val)) && 
                              selectedValues.length === correctAnswer.length;
            feedbackMessage = isCorrect ? `Question ${questionId} : Correct ✅` 
                                         : `Question ${questionId} : Incorrect ❌<br>Les bonnes réponses étaient : ${correctAnswer.join(", ")}`;
        } else { // Cas de réponse unique
            feedbackMessage = selectedValues[0] === correctAnswer ? `Question ${questionId} : Correct ✅` 
                                                                  : `Question ${questionId} : Incorrect ❌<br>La bonne réponse était : ${correctAnswer}`;
        }
    } else {
        feedbackMessage = `Question ${questionId} : Non répondu ❌`;
    }

    // Affiche le message de feedback pour la question
    alert(feedbackMessage);
}

// Fonction pour vérifier toutes les réponses et afficher une correction
function testqcm() {
    let score = 0; // Score initialisé à zéro
    const totalQuestions = Object.keys(correctAnswers).length; // Total des questions
    const correctionContainer = document.getElementById("correctionContainer");

    if (!correctionContainer) {
        console.error("Le conteneur de correction (id='correctionContainer') est introuvable.");
        return;
    }

    // Efface tout contenu existant dans le conteneur de correction
    correctionContainer.innerHTML = "";

    // Parcours des questions
    for (const questionId in correctAnswers) {
        const userAnswer = document.querySelectorAll(`input[name="${questionId}"]:checked`);
        const correctAnswer = correctAnswers[questionId];
        let questionFeedback = "";
        let isCorrect = false;

        if (Array.isArray(correctAnswer)) { // Gestion des réponses multiples pour la question 10
            const selectedValues = Array.from(userAnswer).map(input => input.value);
            isCorrect = correctAnswer.every(val => selectedValues.includes(val)) && 
                        selectedValues.length === correctAnswer.length;
            questionFeedback = isCorrect ? `Réponse : Correct ✅` 
                                        : `Réponse : Incorrect ❌<br>Les bonnes réponses étaient : ${correctAnswer.join(", ")}`;
        } else { // Réponse unique
            isCorrect = userAnswer.length > 0 && userAnswer[0].value === correctAnswer;
            questionFeedback = isCorrect ? `Réponse : Correct ✅` 
                                        : `Réponse : Incorrect ❌<br>La bonne réponse était : ${correctAnswer}`;
        }

        // Affiche la question et le feedback dans le conteneur de correction
        correctionContainer.innerHTML += `<div class="question-feedback">
                                                <p>Question ${questionId}: ${questionFeedback}</p>
                                            </div>`;

        // Met à jour le score
        if (isCorrect) score++;
    }

    // Affiche le score final
    correctionContainer.innerHTML += `<h3>Votre score est ${score} / ${totalQuestions}.</h3>`;
}

// Fonction reset
function reset() {
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(input => input.checked = false);
    const correctionContainer = document.getElementById("correctionContainer");
    if (correctionContainer) correctionContainer.innerHTML = ""; // Efface les corrections
}
