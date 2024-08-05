
// 1. User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
function getUserProfile() {
    const username = prompt("Enter your username:");
    const age = prompt("Enter your age:");
    const favoriteMovies = prompt("Enter your favorite movies (comma-separated):").split(',').map(movie => movie.trim());
    // The trim() method removes whitespace from both sides of a string.
    // The trim() method does not change the original string.
  
    console.log(`\nUuuuuser Profile:`);
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
  
    console.log(`\nFavorite Movies:`);
    favoriteMovies.forEach(movie => {
      console.log(`- The film ${movie} is one of my favorites.`);
    });
  }
  
  getUserProfile();
  


//  -------------------------------------------------------------------------

// 2. Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
function getHighestNumber () {
  // map() creates a new array from calling a function for every array element... goes through each element in the array and applies whateaver we could code
  // parseFloat() converts a string to a floating-point number.
  let numbers = prompt("Enter 10 numbers (comma-separated):").split(',').map(num => parseFloat(num.trim()));
  let highest = numbers[0];
  
  // We loop through the array starting from the second element (indx 1) to compare each number with the current highest.
  // assuming that the first numbeer is the highests unti prove otherwise.
  for (let i = 1; i < numbers.length; i++) {
    // If the current number is greater than the current highest, we update the highest variable.
    if (numbers[i] > highest) {
      // Update the highest.
      highest = numbers[i];
    }
  }
  
  console.log(`The highest number entered is: ${highest}`);
}

getHighestNumber();



//  -------------------------------------------------------------------------
// 3.Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
// Result example: "Time for bed after 10 seconds".

function alarm(){
  let seconds = parseInt(prompt("Enter the seconds until the alarm showns:"));
  // let text = "Time for bed after 10 seconds";

  console.log(`Alarm set for ${seconds} seconds`)

  // setTimeout takes milliseconds!!!!!! soooo seconds are multiplied by 1000.
  setTimeout(() => {console.log(`Time for bed after ${seconds} seconds`)}, seconds * 1000);

}

alarm();



// ----------------------------------------------------------------
// 4. Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

function palindrome() {
  let sentence = prompt("Give me a word or sentence without accents pliiissss: ");
  // Remove punctuation and convert to lowercase
  // split it by words and join them together without spaces
  let cleanSentence = sentence.replace(/[^\w\s]|_/g, "").toLowerCase().split(' ').join('');
  console.log(cleanSentence);
  
  // split('') -> separate each element of the sentence
  // reverse() -> flips it
  // join() -> joins it back together
  let reversed = cleanSentence.split(' ').reverse().join('');
  console.log(reversed);
  
  // compare the cleaned and reversed sentences
  if (cleanSentence === reversed) {
    console.log(`${sentence} is a palindrome.`);
  } else {
    console.log(`${sentence} is not a palindrome.`);
  }
}
  palindrome();


  // using a loop
  // let reversed = '';
  // for (let i = cleanSentence.length - 1; i >= 0; i--) {
  //   reversed += cleanSentence[i];
  // }
  // if (cleanSentence === reversed) {
  //   console.log(`${sentence} is a palindrome.`);
  // } else {
  //   console.log(`${sentence} is not a palindrome.`);
  // }



//  ----------------------------------------------------------------

// 5. Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1); // recursive call
}

function resFactorial() {
  let n = parseInt(prompt("Give me an integer number (1 or greater):"));

  let result = factorial(n);
  
  console.log(`The factorial of ${n} is: ${result}`);
}

resFactorial();


// ----------------------------------------------------------------
// 6. Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
// let multiDimension = [1, [2, 3, [4, 5, [6]]]];
