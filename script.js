// Flashcard functionality
const flashcard = document.querySelector('.flashcard');

// English and Spanish color translations with background colors
const colors = [
    { english: "Red", spanish: "Rojo", bgColor: "red" },
    { english: "Blue", spanish: "Azul", bgColor: "blue" },
    { english: "Green", spanish: "Verde", bgColor: "green" },
    { english: "Yellow", spanish: "Amarillo", bgColor: "yellow" },
    { english: "Orange", spanish: "Naranja", bgColor: "orange" }
];

// Initial state
let currentIndex = 0;
let showingEnglish = true;

// Update flashcard text and background color
function updateFlashcard() {
    const currentColor = colors[currentIndex];
    flashcard.textContent = showingEnglish ? currentColor.english : currentColor.spanish;
    flashcard.style.backgroundColor = currentColor.bgColor; // Update background color
}

// Handle flashcard click to toggle language
flashcard.addEventListener('click', () => {
    showingEnglish = !showingEnglish; // Toggle between English and Spanish
    updateFlashcard();
});

// Handle flashcard double-click to change to the next color
flashcard.addEventListener('dblclick', () => {
    currentIndex = (currentIndex + 1) % colors.length; // Move to the next color
    showingEnglish = true; // Reset to English
    updateFlashcard();
});

// Initialize the flashcard
updateFlashcard();