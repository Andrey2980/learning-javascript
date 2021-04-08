'use strict';

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


// Сущность корзины

//button.onclick = () => {
    //let a = +INPUT_A.value;
    //let b = +INPUT_B.value; 

    //if (a >= 0 && b >= 0) {  
        //console.log(a-b);
    //} else if (a < 0 && b < 0) {  
        //console.log(a*b);
   // } else { 
        //console.log(a+b);
    //}
//}

const button = document.querySelector("button").value;
const INPUT_A = document.querySelector(".card-a").value;
const INPUT_B = document.querySelector(".card-b").value;
const INPUT_C = document.querySelector(".card-c").value;

let sum1 = +INPUT_A.value;
let sum2 = +INPUT_B.value;
let sum = +INPUT_C.value;


button.onclick = () => {
	sum();
	final();
}
console.log(sum);
//function final(sum1, sum2){
	//return sum1 + sum2;
//}
function sum(cost, idProduct) {
			if (idProduct == "apple")
				sum1 += cost;
			if (idProduct == "computer") 
				sum2 += cost;

			sum += sum1 + sum2;
			return sum;
		}
		function final(sum1, sum2){
		sum = sum1 + sum2;
		return sum;
		
	}
	console.log(sum)





// Задание № 6 (надо подумать как лучше сделать) 

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