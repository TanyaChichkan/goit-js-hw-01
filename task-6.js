
let userInput;
let total = 0;

// const numberInputRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function () {
//     console.log(numberInputRef.value);
//     userInput = Number(numberInputRef.value);
//     console.log(userInput);


do {
    userInput = prompt('Insert a number');


    if (userInput === null) {
        console.log('Cancelled by user');
        break;
    }

    userInput = Number(userInput);

    const notNum = Number.isNaN(userInput);
    if (notNum) {
        console.log('A type different from number was inserted');
        continue;
    }

    total += userInput;

} while (true);

alert(`Total is ${total}`);
console.log(`Total  is ${total}`);

