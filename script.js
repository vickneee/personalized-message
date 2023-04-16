function displayMessage() {

const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

if (age < 18) {
    message.textContent = `Hello ${name}, you are not yet an adult.`;
} else {
    message.textContent = `Hello ${name}, you are an adult.`;
}
    const quotes = ["Your energy introduces you before you even speak.", "We all make choices, but in the end our choices make us.", "Live the moment.", "It’s okay to not be okay as long as you are not giving up.", "Every moment matters.", "Focus on the good.", "You are enough." ];

    const randomQuote = document.getElementById("randomQuote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuote.innerHTML = `<p>${quotes[randomIndex]}</p>`;
})
}
