
// const total = 100;
// const ordered = 130;

// if (ordered > total) {
//     console.log(`На складе недостаточно товаров!`);
// } else {

//     console.log(`Заказ оформлен, с вами свяжется менеджер`);

// }

// console.log(`Спасибо за покупку`);

const total = 100;


const orderedInputRef = document.querySelector('input[name="ordered"]');

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
    console.log(orderedInputRef.value);
    const numberOrdered = Number(orderedInputRef.value);

    if (numberOrdered > total) {
        console.log(`На складе недостаточно товаров!`);
    } else if (numberOrdered === 0) {
        console.log('Не указано к-ство товаров');
    } else {

        console.log(`Заказ оформлен, с вами свяжется менеджер`);

    }
});



