// Array of temperatures in Celsius
const temperatures: number[] = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];

// Function to convert Celsius to Fahrenheit
const convertToFahrenheit = (tempInCelsius: number): number => {
  return (tempInCelsius * 9/5) + 32;
}

// Convert all temperatures in the array to Fahrenheit
const temperaturesInFahrenheit: number[] = temperatures.map(convertToFahrenheit);

// Output the result
console.log(temperaturesInFahrenheit);
