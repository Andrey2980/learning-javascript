//заданме номер 1

function decompositionOfNumber() {
    let num = +prompt("Введите число");
    let digit = 0;

    let number = {
        units: "",
        dozens: "",
        hundreds: "",
    };

    let array = [0, 0, 0];

    if (num > 999)
        return number;
    
    for (let i = 0; i < array.length - 1; i++) {
        digit = num % 10;
        array[i] = digit;
        num = Math.floor(num / 10);
    }

    number.units = array[0];
    number.dozens = array[1];
    number.hundreds = num;

    return number;
}

console.log(decompositionOfNumber());



//задание номер 1

let korobka = {
    id: 0.1,
    name: "apple",
    price: 1123.09,
    description: "<P>"
}

console.log(korobka.id + korobka.price); 