// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!»

/*let age = prompt("How old are you?");
alert(`Привіт, мені ${age} років`);*/

//-----------------------------------------------------------------------------------------------------------

// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.

/*
let year = +prompt("What year were you born in?");
const currentYear = 2020;
let age = currentYear - year;
alert(`Your age is ${age}`);*/

//-----------------------------------------------------------------------------------------------------------

// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.
/*
let a = +prompt("Write rectangle width");
let b = +prompt("Write rectangle height");
if (a===b) {
    alert('This is not a rectangle')
} else {
    let perimeter = (a+b)*2
    alert(`Perimeter is ${perimeter}`)
}
*/

//-----------------------------------------------------------------------------------------------------------

// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)
/*

let radius = +prompt('What is the radius of the circle?');
const PI = 3.14;
let area = PI * (Math.pow(radius, 2));
alert(`Area of the circle is ${area}`);*/

//-----------------------------------------------------------------------------------------------------------

// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.

/*
let time = +prompt("Скільки годин залишилось їхати?")
const speed = 50;
let distance = time * speed;
alert(`Вам залишилось їхати ${distance} км`);


*/





//6. Реалізуємо конвертер кілометрів в милі і навпаки =)
/* km to miles
let kilometers = +prompt("Converter km to miles. Write km");
let converter = kilometers / 1.609;
let miles = converter;
alert(`${kilometers} km = ${miles.toFixed(3)} miles`);*/

/* Miles to km
let miles = +prompt("Converter miles to km. Write miles");
let converter = miles * 1.609;
let kilometers = converter;
alert(`${miles} miles = ${kilometers.toFixed(3)} km`);
*/







// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.

let money = +prompt("Введіть кількість грн на вашій картці");
const benzinPrice = +prompt("Введіть ціну одного літра бензину");
let benzin = money / benzinPrice;
let rest = money - (Math.floor(benzin)*benzinPrice);

let success = confirm(`Ви зможете купити ${Math.floor(benzin)} л бензину. Та у вас залишиться ${rest} грн. Ви згодні?`);
if (success == true) {
    alert(`Ви успішно купили ${benzin} л бензину`)
} else {
    let yourWish = +prompt("Тоді скільки літрів бензину ви бажаєте купити?");
    let currentLiter = benzin - yourWish;
    let bank = currentLiter * benzinPrice;
    alert(`Тоді у вас залишиться ${bank} грн`);
}


