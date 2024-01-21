// JavaScript source code

function calculateRectangleArea(width, height) {
    return width * height;
    //const calculateRectangleArea = (width, height) => width * height; zapis strzałkowy
}

// Wywołanie funkcji i wyświetlenie wyniku

function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}


function calculateCircleArea(radius = 1) {
    return Math.PI * radius ** 2;
}


function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}


// FUNKCJE WLASNE:

// Funkcja do konwersji temperatury z Celsiusza na Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Funkcja do generowania losowej liczby z zakresu
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funkcja do zamiany pierwszej litery w zdaniu na wielką
function capitalizeFirstLetter(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Funkcja do obliczania sumy cyfr liczby
function sumDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Funkcja do sprawdzania czy dana liczba jest liczbą pierwszą
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}