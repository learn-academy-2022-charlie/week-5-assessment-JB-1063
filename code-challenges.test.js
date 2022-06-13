// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4,'e' to 3, 'i' to 1, 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe("convertChar", () => {
  const secretCodeWord1 = "Lackadaisical"
  const secretCodeWord2 = "Gobbledygook"
  const secretCodeWord3 = "Eccentric"
    it("converts certain vowels on a string to numbers based on input", () => {
        expect(convertChar(secretCodeword1)).toEqual("L4ck4d41s1c4l")
        expect(convertChar(secretCodeword2)).toEqual("G0bbl3dyg00k)
        expect(convertChar(secretCodeword3)).toEqual("3cc3ntr1c")
      })
    })
//RED Test:

// SyntaxError: /Users/learnacademy/Desktop/week-5-assessment-JB-1063/code-challenges.test.js: Unterminated string constant. (25:53)

// 23 |     it("converts certain vowels on a string to numbers based on input", () => {
// 24 |         expect(convertChar(secretCodeword1)).toEqual("L4ck4d41s1c4l")
// > 25 |         expect(convertChar(secretCodeword2)).toEqual("G0bbl3dyg00k)
//    |                                                      ^
// 26 |         expect(convertChar(secretCodeword3)).toEqual("3cc3ntr1c")
// 27 |       })
// 28 |     })

// at instantiate (node_modules/@babel/parser/src/parse-error/credentials.js:61:22)
// at instantiate (node_modules/@babel/parser/src/parse-error.js:58:12)
// at Parser.toParseError [as raise] (node_modules/@babel/parser/src/tokenizer/index.js:1736:19)
// at Parser.raise [as readString] (node_modules/@babel/parser/src/tokenizer/index.js:1426:20)
// at Parser.readString [as getTokenFromCode] (node_modules/@babel/parser/src/tokenizer/index.js:980:14)
// at Parser.getTokenFromCode [as nextToken] (node_modules/@babel/parser/src/tokenizer/index.js:286:10)
// at Parser.nextToken [as next] (node_modules/@babel/parser/src/tokenizer/index.js:145:10)
// at Parser.next [as parseCoverCallAndAsyncArrowHead] (node_modules/@babel/parser/src/parser/expression.js:846:10)
// at Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (node_modules/@babel/parser/src/parser/expression.js:749:19)
// at Parser.parseSubscript [as parseSubscripts] (node_modules/@babel/parser/src/parser/expression.js:705:19)

// Test Suites: 1 failed, 1 total
// Tests:       0 total


// b) Create the function that makes the test pass.
// initial pseudo code
// create a function
// that takes in a string
// and returns a coded message
// coded message transforms the following  characters if found in the string:
// 'a' to a '4'
// 'e' to a '3'
// 'i' to a '1'
// 'o' to a '0'
// look for each  of the four characters
// if found use replacement character
// when done print the new string with the replacement character

const convertChar (string) => {
  let convertWord = ""  
  for (i = 0; i < string.length; i++){ 
     if (string[i] ==='a') {           // to test if 'a" in the string
        convertWord += '4';
     } else if (string[i] === 'e'){    // to test if 'e" in the string
        convertWord += '3';
     } else if (string[i] === 'i'){    // to test if 'i" in the string
       convertWord += '1'; 
     } else if (string[i] === 'o'){    // to test if 'o" in the string
       convertWord += '0'
     }
     }
     return convertWord
  }

//Green Test
// Showing same result as Red Test
// got stuck here, so I moved on to the next problem






// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsWithLetter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("returns all the words that contain that particular letter", () => {
      expect(wordsWithLetter(arrayOfWords1, letterA)).toEqual("Apple", "Banana", "Orange")
      expect(wordsWithLetter(arrayOfWords2, letterE)).toEqual("Cherry", "Blueberry", "Peach")
    })
  })

// RED Test:
//Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.384 s
// Ran all test suites.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Initial pseudo code:
// create a function
// that takes in an array of strings and a string of a single letter
// returns all the words that contain that particular letter
// loop through the array 
// and loop through each string in the array
// and compare if the letter is found in the string
// if the letter is found in a string place that string in a new array
// after looping through all the strings in the array, 
// output the new array containing the strings where the letter was found
// Expected output: false

  const wordsWithLetter = (array, string) => {
   let newWordArray = []
       for(let i = 0; i < array.length; i++ ) { 
        if (array[i]).includes(string)
          newWordArray.push(array[i]) 
  }
    return newWordArray
  }

 //Green Test:
 // FAIL  ./code-challenges.test.js
  // ● Test suite failed to run

  // Jest encountered an unexpected token
//
//Details:

// SyntaxError: /Users/learnacademy/Desktop/week-5-assessment-JB-1063/code-challenges.test.js: Unexpected token (105:21)

// 103 |    let newWordArray = []
// 104 |        for(let i = 0; i < array.length; i++ ) { 
// > 105 |         if (array[i]).includes(string)
//     |                      ^
// 106 |           newWordArray.push(array[i]) 
// 107 |   }
//
// Not sure how to fix syntax error. Tried replacing [i] with (i) but with same results, so I proceeded to the next problem




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  const hand1 = [5, 5, 5, 3, 3]
  const hand2 = [5, 5, 3, 3, 4]
  const hand3 = [5, 5, 5, 5, 4]
  
  it("returns true if pairCount is == 4 otherwise it returns false", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    
  })
})
//Red Test
//Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.492 s


// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false


// b) Create the function that makes the test pass.

//initial pseudo code
//creat a function named fullHouse
//takes in an array of 5 numbers
// take first value and compare to each of the other values
// if a pair is found, add 1 to the pair counter
// after first value is compared to the other value
// start with the next value and compare again to the rest of the values in the array, adding 1 each time a pair is found
// continue comparing until all values in the array is compared to each value adding 1 point to the pair counter every time a pair is found
//when all values are compared to each other
// check if pair counter is equal to 4
// if true a the cards have a full house; output true
// if pair counter is not equal to 4 the cards do not have a full house and output false

const fullHouse = (array) => {
  let pairCount = []
  for( let i = 1; i <= 4; i++) {  // to compare first card to other cards
    if (array[0] == array[i]) {
      pairCount = pairCount + 1;
    }
   }
   for ( let i = 2; i <= 4; i++){ // ti compare second card to other cards
     if (array[1] == array[i]) {
       pairCount = pairCount + 1;
     }
   }
   for ( let i = 3; i <= 4; i++) { // to compare third card to other cards
    if (array[2] == array[i]) {
      pairCount = pairCount + 1;
    }
  }
    for ( let i = 4; i <= 4; i++){  // to compare fourth card to the fifth card
      if (array[3] == array[i]) {
      pairCount = pairCount + 1;
    }
}
  if (pairCount == 4)
    return true
  else 
    return false
    
}

//Green Test:
//Received: false

// 142 |   
// 143 |   it("returns true if pairCount is == 4 otherwise it returns false", () => {
// > 144 |     expect(fullHouse(hand1)).toEqual(true)
//     |                              ^
// 145 |     expect(fullHouse(hand2)).toEqual(false)
// 146 |     expect(fullHouse(hand3)).toEqual(false)
// 147 |     

// at Object.toEqual (code-challenges.test.js:144:30)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Can not figure out the fix for the error.