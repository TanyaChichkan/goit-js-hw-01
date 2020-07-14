
// let country = 'Chile';
// let price;



let price;

const countryInputRef = document.querySelector('input[name="message"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
    // console.log(countryInputRef.value);

    let countryName = String(countryInputRef.value);
    // console.log(countryName);

    let country = countryName.toUpperCase();
    // console.log(country);


    switch (country) {

        case 'CHINA':
            price = 100;
            console.log(`Delivery cost to ${country} is ${price} credits`);
            break;

        case 'CHILE':
            price = 250;
            console.log(`Delivery cost to ${country} is ${price} credits`);
            break;

        case 'AUSTRALIA':
            price = 170;
            console.log(`Delivery cost to ${country} is ${price} credits`);
            break;

        case 'INDIA':
            price = 80;
            console.log(`Delivery cost to ${country} is ${price} credits`);
            break;

        case 'JAMAICA':
            price = 120;
            console.log(`Delivery cost to ${country} is ${price} credits`);
            break;

        default:
            alert('Delivery to your country is not available at the moment');
    }

});


