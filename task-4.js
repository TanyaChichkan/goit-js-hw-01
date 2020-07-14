
// const pricePerDroid = 3000;
// const credits = 23580;
// let totalPrice = 0;
// let balance;

// let numerDroids = prompt('Quantity to get');

// if (numerDroids === null) {
//     alert('Cancelled by user');

// } else if (totalPrice = numerDroids * pricePerDroid) {
//     console.log(totalPrice);

//     if (totalPrice > credits) {
//         console.log('Insufficient balance');

//     } if (totalPrice <= credits) {
//         balance = credits - totalPrice;
//         console.log(`You got ${numerDroids} droid/(-s), your balance is ${balance} credits.`);
//     }
// }


const pricePerDroid = 3000;
const credits = 23580;
let totalPrice = 0;
let balance;

const numberInputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
    console.log(numberInputRef.value);

    const numberDroids = Number(numberInputRef.value);
    console.log(numberDroids);

    if (numberDroids === 0) {
        alert('Cancelled by user');
        console.log('Cancelled by user');

    } else if (totalPrice = numberDroids * pricePerDroid) {
        console.log(totalPrice);

        if (totalPrice > credits) {
            console.log('Insufficient balance');

        } if (totalPrice <= credits) {
            balance = credits - totalPrice;
            console.log(`You got ${numberDroids} droid/(-s), your balance is ${balance} credits.`);
        }
    }
});


