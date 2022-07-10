//------------------Задания 1

let firstName = prompt('Ваше имя');
let age = prompt('Возраст');
let city = prompt('Город проживания');
let phone = prompt('Телефон');
let email = prompt('E-mail');
let company = prompt('работаю в компании');

let str = `Меня зовут ${firstName}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. 
Мои контактные данные: телефон ${phone}, почта ${email}.`;

console.log(str)

//------------------Задания 2
let bday = 2022 - age;
let str1 = `${firstName} родился в ${bday} году.`;

console.log(str1)

//------------------Задания 3

let str2 = prompt(213312);
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
    alert('да');
} else {
    alert('нет');
}

//------------------Задания 4

let a = prompt('Ведите число');

if (a > 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

//------------------Задания 5

let aa = 10;
let bb = 2;

let str3 = `Сумма: ${aa + bb}, разность: ${aa - bb}, произведение: ${aa * bb}, частное: ${aa / bb}`;
alert(str3);

if(aa + bb > 1) {
	alert(`число 12 в квадрате: ${Math.pow(aa + bb, 2)}.`);
}

//------------------Задания 6

if (aa > 2 && aa < 11 || bb >= 6 && bb < 14) {
	alert('Верно');
} else {
	alert('Неверно');
}

//------------------Задания 7

let n = 56;
if (n >= 0 && n <= 14) {
    alert('первая четверть часа');
}
if (n >= 15 && n <= 29) {
    alert('втарая четверть часа');
}
if (n >= 30 && n <= 44) {
    alert('третья четверть часа');
}
if (n >= 45 && n <= 60) {
    alert('четвёртая четверть часа');
};

//------------------Задания 8

let day = 16;
if (day > 0 && day <= 9) {
    alert('Первая декада');
} else if (day >= 10 && day < 20) {
    alert('Вторая декада');
} else {
    alert('Третья декада');
};











