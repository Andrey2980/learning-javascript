"use strict";
//Задать температуру в градусах по Цельсию. Вывести в alert
// соответствующую температуру в градусах по Фаренгейту. 
//Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, 
//где Tf — температура по Фаренгейту, Tc — по Цельсию.

//Объявить две переменные: admin и name. Записать в name строку "Василий";
//Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).

//Чему будет равно JS-выражение 1000 + "108"\
//Самостоятельно разобраться с атрибутами тега script (async и defer).

let celsiUs = +prompt ("Введите температуру в градусах 'Цельсия'");
let fahrenHeit = (9 / 5) * celsiUs + 32;
console.log (fahrenHeit);
alert ("Температура по шкале Фаренгейта, составляет:"+ " " + fahrenHeit + " " + "градусов");

let naMe = ("admin: Василий");
let admin = naMe;
console.log(admin);

console.log (1000 + "108");


function start() {
    const yes = confirm ("Хотите сыграть в игру?")

    if(!yes) {
        return;
    }
    
    play();

} 

function play () {
    alert();
}



