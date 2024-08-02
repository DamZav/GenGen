
console.log(`------------------- sumResistance ---------------------`);
// Sum of Resistors in Series
 
// Calculate the sum of all resistors connected in series.

// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

// ---------------------------------------------------------------------- 
// ======= map() method is:
// let absolutes = resistances.map(num => Math.abs(num));
// ========   reduce() method is:
// let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
// ----------------------------------------------------------------------

function sumResistance(resistances) {
    // const total = absolutes.reduce(absolutes)
    // Sumar todas las resistencias utilizando su valor absoluto
    let sum = resistances.reduce((sum, resistance) => sum + Math.abs(resistance), 0);
    return sum;
} 

console.log(sumResistance([-1, 5, 6, 3]))
console.log(sumResistance([14,3.5,6]));
console.log(sumResistance([8,15,100]));


console.log(`-----------------------------------------------------------------`);
// --------------------------------------------------------------------------------------------------------

console.log(`------------------- Halfs ---------------------`);

// Number divided into halves
 
// Given a number, return the number divided into its halves in an array. 
// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.

function halfs(number) {
    let half = number / 2;
    return [half, half];
}

console.log(halfs(4));
console.log(halfs(10));
console.log(halfs(27));


console.log(`-----------------------------------------------------------------`);

// --------------------------------------------------------------------------------------------------------

console.log(`------------------- Secret Society ---------------------`);

// Secret Society
 
// Find the name of a secret society based on the first letter of each member's name.
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.


// ---------------------------------------------------------------------- 
// > sec = ['dam', 'tul', 'mar', 'jan']
// [ 'dam', 'tul', 'mar', 'jan' ]
// > sec[0]
// 'dam'
// > sec.map(n => n[0])
// [ 'd', 't', 'm', 'j' ]
// k = sec.map(n => n[0])
// [ 'd', 't', 'm', 'j' ]
// > union = k.join('')
// 'dtmj'
// ---------------------------------------------------------------------- 

function secretSociety(names) {
    let firstLetters = names.map(name => name[0]);
    let union = firstLetters.join('');
    return union;
}

console.log(secretSociety(["Esperanza", "Franco", "Nia"])); // `'EFN'`
console.log(secretSociety(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); // 'CJMPRR'
console.log(secretSociety(['Harry', 'Ron', 'Hermione'])); // 'HHR'



console.log(`-----------------------------------------------------------------`);
// --------------------------------------------------------------------------------------------------------
 
console.log(`------------------- Online Status ---------------------`);

// Online status

// Display online status for a list of users.
// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

nicknames = ['mockIng99', 'J0eyPunch', 'glassedFer']
nicknames.forEach((e) => {
    console.log(`${e} is online`);
})



console.log(`-----------------------------------------------------------------`);
// --------------------------------------------------------------------------------------------------------
 
console.log(`------------------- Array of Multiples ---------------------`);

// Array of Multiples
 
// Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
// Examples:
// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

function matrixOfMulti(number, len) {
    // let num = numbers[0]
    // let mul = numbers[1]
    tables = []
    for (let i = 1; i <= len; i++) {
        tables.push(number * i)
    }
    return (`Los primeros ${len} múltiplos de ${number} son: [${tables}]`)
}

console.log(matrixOfMulti(2, 10)); 
console.log(matrixOfMulti(17, 6)); 



console.log(`-----------------------------------------------------------------`);

// --------------------------------------------------------------------------------------------------------
console.log(`------------------- Positive Dominance in Array ---------------------`);

// Positive dominance in Array
 
// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.
// Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

function dominance(matrix) {
    let positiveCount = 0;
    // const matrixLen = matrix.length
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] > 0) { // si cada i de matrix es > 0
            positiveCount++; // positiveCount aumenta en 1
            }
        }
    return positiveCount > (matrix.length / 2);  // positiveCount es mayor a la dimensión de l amtriz entre dos     
    }

console.log(dominance([-1, -3, -5, 4, 6767])); // false
console.log(dominance([-1, 3, 1, 2, 3])); // true



console.log(`-----------------------------------------------------------------`);

// --------------------------------------------------------------------------------------------------------
console.log(`------------------- Antipodal Average ---------------------`);

// Antipodal Average
 
// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.

function antipodal(matrix) {
    let length = matrix.length;

    if (length % 2 !== 0) { // Si la longitud de la matriz es impar, eliminar el centro
        matrix.splice(Math.floor(length / 2), 1);
        length--;
    }

    let firstPart = matrix.slice(0, length / 2);
    let secondPart = matrix.slice(length / 2).reverse();

    let result = firstPart.map((num, index) => (num + secondPart[index]) / 2);

    return result;
}

console.log(antipodal([1, 2, 3, 5, 22, 6])); // [3, 5, 12, 4]

