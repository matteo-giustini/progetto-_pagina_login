const loginElm = document.getElementById ('loginForm');
const registerElm = document.getElementById('registerForm');
const message = document.getElementById('message');

if (loginElm) {
    loginElm.addEventListener('submit', function (e) {
    e.preventdefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Login:", email, password);

    message.txtContent = "login simulato";
    })
}

if (registerElm) {
    registerElm.addEventListener('submit', functiion (e) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log("Login:", email, password);

    message.txtContent = "register simulato";
    })
}