function message() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);

    if (age >= 18) {
        document.getElementById("message").innerHTML = `Hello ${name}, you are an adult.`
    } else if (age < 18) {
        document.getElementById("message").innerHTML = `Hello ${name}, you you are not yet an adult.`
    }
}
