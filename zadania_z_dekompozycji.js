// JavaScript source code
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    engine: {
        type: "V6",
        displacement: "3.5L"
    },
    features: {
        safety: {
            airbags: true,
            abs: true
        },
        entertainment: {
            radio: "Bluetooth",
            touchscreen: true
        }
    }
};

function extractCarValues(car) {
    const { model, year, engine: { type }, features: { safety: { airbags }, entertainment: { touchscreen } } } = car;

    // Możesz tutaj wykonać dowolne operacje na wyciągniętych wartościach
    // Na przykład, możesz zwrócić je, wyświetlić w konsoli, itp.

    return {
        model,
        year,
        engineType: type,
        airbags,
        touchscreen,
    };
}

const { model, year, features: { safety: { airbags }, entertainment: { touchscreen } } } = car;

console.log("2. Zadanie z dekompozycji")

console.log("Model:", model);
console.log("Year:", year);
console.log("Airbags:", airbags);
console.log("Touchscreen:", touchscreen);