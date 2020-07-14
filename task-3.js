
// const ADMIN_PASSWORD = 'fistashka';
// let message = prompt('Your password');

// if (message === null) {
//     alert('Отменено пользователем!');
//     console.log('Отменено пользователем!');
// }
// else if (message === ADMIN_PASSWORD) {
//     alert('Добро пожаловать!');
//     console.log('Добро пожаловать!');

// } else {
//     alert('Доступ запрещен!');
//     console.log('Доступ запрещен!');
// }


const ADMIN_PASSWORD = 'fistashka';

const textInputRef = document.querySelector('input[name="message"]');
const buttonRef = document.querySelector('button');


buttonRef.addEventListener('click', function () {
    console.log(textInputRef.value);

    let userPass = String(textInputRef.value);
    console.log(userPass);

    if (userPass === "") {
        alert('Отменено пользователем!');
        console.log('Отменено пользователем!');
    }
    else if (userPass === ADMIN_PASSWORD) {
        alert('Добро пожаловать!');
        console.log('Добро пожаловать!');

    } else {
        alert('Доступ запрещен!');
        console.log('Доступ запрещен!');

    }
});
