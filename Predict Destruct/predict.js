const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Prediction: Tesla, Mercedes (Correct)


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// I think there will be an error since name is mentioned in the code first after being declared with a const. 
//Answer: Error! Uncaught ReferenceError: name is not defined, But Elon was logged after since it was declared.

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// Prediction: I think there will be an error on the first console.log and the second console log will output 12345
//Answer: First console log outputed 12345 and the second console log outputed undefined. 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// Prediction: 5 & 2
// Answer True & False lol

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Prediction: 'value', [1, 5, 1, 8, 3, 3], 1, error
//Answer: value, [1, 5, 1, 8, 3, 3], 1, 5 - Super Close just missed console.log(willThisWork); = 5.
