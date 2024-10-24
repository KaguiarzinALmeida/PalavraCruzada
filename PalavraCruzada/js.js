function validateCrossword() {
    const inputs = document.querySelectorAll('.crossword input');
    inputs.forEach(input => {
        const expectedAnswer = input.getAttribute('data-answer');
        if (input.value.toUpperCase() === expectedAnswer) {
            input.classList.add('correct');
            input.classList.remove('wrong');
        } else if (input.value) {
            input.classList.add('wrong');
            input.classList.remove('correct');
        }
    });
}