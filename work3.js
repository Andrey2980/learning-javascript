'use strict';

														//Преобразуем строку в значение

console.log(10 + Number("5"));


                                                 // Выводим натуральные числа

function isSimple(num) {
	let i = 3;

	if (num == 1) {
		return false;
	}
	if (num % 2 == 0 && num != 2) 
		return false;
	else {
		while (i <= Math.sqrt(num) + 2) {
		if (num % i == 0 && num != i)
			return false;
		i+=2;
		}
	}
	return true;
}

let n = 0;
while (n <= 100) {
	if (isSimple(n))
		console.log(n);
	n += 1;
}

isSimple()

                                                            //Подсчет корзины

let result = 0;
let arr = [123.10, 123.10, 123.10];

for (let i = 0; i < arr.length; i++) {
	result += arr[i];
}

console.log("Посчитали корзину",result);

																			//Задача с корзиной


let products =[ ["laptop", 50000], ["telephone", 15000],["smartWatch", 5000] ];

function countBasketPrice(arr) {
	let sum = 0;
	for (let i = 0; i < products.length - 1; i++) {
		sum += products[i][1];
	}

	return sum;
}

console.log("Посчитали корзину через функцию", countBasketPrice(products));



									// Использование for вне тела цикла вывести значение от 0 до 9



for (let i = 0; i < 10; console.log(i++));

	


												//Нарисовать пирамиду с помощью console.log

for(let i = 0; i < 21; i++) {
	console.log("*".repeat(i));
} 

												//Нарисовать пирамиду 


let out = document.querySelector(".out");

let p = 0;
let outStr = '';
let flag = 19;

while (p < 20) {
    let p1 = 0;
    while (p1 < 20) {
        if (p1 < flag) {
            outStr += '&nbsp';
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}

out.innerHTML = outStr;


let star = "*";
while (star < 20) {
    star++;
}