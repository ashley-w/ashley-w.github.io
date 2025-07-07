// This file provides basic answer validation functions to ensure user inputs are correct.

function validateAnswer(userInput, correctAnswer) {
    return userInput.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}

function isEmptyInput(userInput) {
    return userInput.trim() === '';
}

function validateMultipleChoiceAnswer(userInput, validOptions) {
    return validOptions.includes(userInput.trim().toLowerCase());
}

// Exporting functions for use in other modules
export { validateAnswer, isEmptyInput, validateMultipleChoiceAnswer };