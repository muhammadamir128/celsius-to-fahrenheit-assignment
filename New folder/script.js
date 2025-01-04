// Array of temperatures in Celsius
var temperatures = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];
// Function to convert Celsius to Fahrenheit
var convertToFahrenheit = function (tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
};
// Convert all temperatures in the array to Fahrenheit
var temperaturesInFahrenheit = temperatures.map(convertToFahrenheit);
// Output the result
console.log(temperaturesInFahrenheit);
