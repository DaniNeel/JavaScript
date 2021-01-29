const input = prompt("please enter email to verify", "");

function emailValidation(txt) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(txt);
}

console.log(emailValidation(input));