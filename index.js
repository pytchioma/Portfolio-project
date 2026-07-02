/* Typing Effect */

// Text that will appear in the terminal
const sentenceToType = "console.log('Welcome to my portfolio!');";

// The HTML element where the text will be displayed
const typedTextElement = document.getElementById("typedText");

// Keeps track of the current character
let letterIndex = 0;

// Displays one character at a time
function typeNextLetter() {

  // Continue until every character has been displayed
  if (letterIndex < sentenceToType.length) {

    // Add the current character to the screen
    typedTextElement.textContent += sentenceToType.charAt(letterIndex);

    // Move to the next character
    letterIndex++;

    // Repeat after a short delay
    setTimeout(typeNextLetter, 60);
  }
}

// Wait briefly before starting the animation
setTimeout(typeNextLetter, 1200);



/* Scroll Reveal Animation */

// Select every element that should animate into view
const revealElements = document.querySelectorAll(".reveal");

// Set each element's animation delay
revealElements.forEach(function (element) {

  // Read the delay value from the HTML
  const delaySteps = element.getAttribute("data-delay") || 0;

  // Pass the delay value to CSS
  element.style.setProperty("--delay", delaySteps);
});

// Create an observer to watch elements as they scroll into view
const scrollObserver = new IntersectionObserver(

  function (entries) {

    // Check each observed element
    entries.forEach(function (entry) {

      // If the element is visible...
      if (entry.isIntersecting) {

        // ...start its animation
        entry.target.classList.add("reveal--visible");

        // Stop watching once it has animated
        scrollObserver.unobserve(entry.target);
      }
    });

  },

  {
    // Trigger the animation before the whole element is visible
    threshold: 0.15,
  }
);

// Begin watching every reveal element
revealElements.forEach(function (element) {
  scrollObserver.observe(element);
});



/* Footer Year */

// Find the year placeholder in the footer
const yearElement = document.getElementById("year");

// Update it if it exists
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}