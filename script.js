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
});
