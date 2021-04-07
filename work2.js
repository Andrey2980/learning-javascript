
// III. Объявить две целочисленные переменные a и b и задать им произвольные
// начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// ноль можно cчитать положительным числом. 

const button = document.querySelector("button");
const INPUT_A = document.querySelector(".variable-a");
const INPUT_B = document.querySelector(".variable-b");
const INPUT_C = document.querySelector(".variable");


button.onclick = () => {
    let a = +INPUT_A.value;
    let b = +INPUT_B.value; 

    if (a >= 0 && b >= 0) {  
        console.log(a-b);
    } else if (a < 0 && b < 0) {  
        console.log(a*b);
    } else { 
        console.log(a+b);
    }
}

// IV. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
//организовать вывод чисел от a до 15. 

let changeButton = document.querySelector(".push-button"); 
changeButton.onclick = pushButton;

function pushButton() {
    
    let a = +INPUT_C.value;

    switch (a) {  
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:  
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14); 
        case 15:
            console.log(15); 
        default: 
        break;
    }
}


// V. Реализовать основные
//4 арифметические операции в виде функций с двумя параметрами.
//Обязательно использовать оператор return. 

let num1 = 2,
    num2 = 6;

function sum() {
    return num1 + num2; 
}
sum();

function sub() {
    return num1 - num2; 
}
sub();

function multipl() {
    return num1 * num2; 
}
multipl();

function divis() {
    return num1 / num2; 
}
divis();


// VI. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//В зависимости от переданного значения операции выполнить одну из 
//арифметических операций (использовать функции из пункта 3) и вернуть
//полученное значение (использовать switch).


function mathOperation(arg1, arg2, operation) {
    
    switch (operation) {  
        case "сложение":
            console.log(arg1 + arg2);
            break;
        case "вычитание":
            console.log(arg1 - arg2);
            break;
        case "умножение":
            console.log(arg1 * arg2);
            break;
        case "деление":
            console.log(arg1 / arg2);
            break;
        default: 
        	break;
    }
}

let arg1 = 2;
let arg2 = 2;
let operation = "сложение";
mathOperation(arg1, arg2, operation);


// VII. *Сравнить null и 0. Попробуйте объяснить результат.

    let c = "null";
    let d = "0";
    d = Number(d);
    c = Number(c);
    let a = 0*c;
    let b = 0*d;
    console.log(a);
    console.log(b);

// VIII. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.



    function power(val, pow) {
        if (pow == 1) {
            return val;
        } else {
          return val * power(val, pow - 1);
        }
    }

    console.log(power(2,3));
    