const RANDOM_MIN_NUMBER = 1;
const RANDOM_MAX_NUMBER = 5;

const NUMBER_OF_DIGITS = 4;
const NUMBER_OF_ATTEMPTS = 5;
let show1 = document.querySelector(".show__loop-1");
let show2 = document.querySelector(".show__loop-2");

function start() {
    const yes = confirm('Хотите сыграть в игру?');
    if (!yes) {
        return;
    }
    play();
}

function play() {
    const generated = getSecretNumber(NUMBER_OF_DIGITS);
    console.log(generated);

    let entered = null;
    let attempts = 0;

    while (true) {
        const prompted = prompt('Введите число');

        if (isNaN(Number(prompted))) {
            continue;
        }

        entered = prompted.split('');
        attempts++;
        

        let cows = 0;
        let bulls = 0;
        // for (let [digit, index] of generated.entries()) {
        for (let i = 0; i < generated.length; i++) {
            if (generated[i] === Number(entered[i])) {
                bulls += 1;
            } else if (generated.includes(Number(entered[i]))) {
                cows += 1;
            }
        }

        alert(`Быков: ${bulls}. Коров: ${cows}`);

        if (attempts === NUMBER_OF_ATTEMPTS && bulls !== NUMBER_OF_DIGITS) {
            alert('Ты проиграл.');
            break;
        }

        if (attempts === NUMBER_OF_ATTEMPTS || bulls === NUMBER_OF_DIGITS) {
            alert('Ты выиграл.');
            break;
        }
    }
    show1.innerHTML = attempts;
}

function playGame() {
    const generated = getRandomNumber(RANDOM_MIN_NUMBER, RANDOM_MAX_NUMBER);
    let entered = null;
    let attempts = 0;
    
    while (generated !== entered) {
        const prompted = Number(prompt('Введите число'));
        //const showAnswer = Number(prompt(`Введите номер ромер попытки, которую вы хотите посмортеть`));
        if (isNaN(prompted)) {
            continue;
        }
        entered = prompted;
        attempts++;
        show2.innerHTML = attempts;

        switch (compareNumbers(entered, generated)) {
            case -1:
                alert(`Загаданное число больше ${entered}, повторите попытку`);
                console.log (`${entered}, ${attempts}`);
                break;
            case 1:
                alert(`Загаданное число меньше ${entered}, повторите попытку`);
                console.log (`${entered}, ${attempts}`);
                break;
            case 0:
                alert(`Вы отгадали число ${generated} за ${attempts} попыток!`);
                console.log (`${entered}, ${attempts}`);
                break;
        }
    }
}


function getSecretNumber(digits) {
    const secret = [];

    for (let i = 0; i < digits; i++) {
        let generated;

        do {
            generated = getRandomNumber(1, 9);
        }
        while (secret.includes(generated))

        secret.push(generated);
    }

    return secret;
}


function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}


function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

