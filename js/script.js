
// const length = 10;
// for (let i = 1; i <= length; i++) {
//     let string = "";

//     for (let j = 1; j <= i; j++) {
//         string += "*" + " ";
//     }

// console.log(string);
// }

// const array = [4, 2, 45, 5, 1, 1, 12, 2, 4,5,44,55,23];
// const newArray =[];

// for (let i=0; i<array.length; i++){
//     if(newArray.indexOf(array[i]) === -1){
//         newArray.push(array[i]);
//     }
// }

// console.log(newArray);

// const array = [1, 33, 4, 5, 66, 8, 2, 3, 8, 5, 1, 6, 44, 2, 8];
// const newArray = [];
// const printedNumbers = [];

// for (let i = 0; i < array.length; i++) {
//     if (newArray.indexOf(array[i]) === -1) {
//         newArray.push(array[i]);
//     } else if (printedNumbers.indexOf(array[i]) === -1) {
//         printedNumbers.push(array[i]);
//     }
// }
// console.log(newArray);
// console.log(printedNumbers);


// function sum(num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// console.log(sum(10, 20));
// saySomething();

// function saySomething(){
//     console.log("Something");
// }


// const sum = function (num1, num2){
//     return num1 + num2;
// };

// const result = sum(1 ,3);
// console.log(result);

// arrow function | ES6

// const sum = num1 => num1 +9;
// const result = sum(4);
// console.log(result);

// callback function 

// const countLetter = (str, letter) => {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             counter++
//         }
//     }
//     return counter;
// };

// const result = countLetter("ia", "a");
// console.log(result);

// const messageFunction = (text) => console.log(`This is your number: ${text}`) 

// function countLetter(str, letter, e) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             counter++
//         }
//     }
//     e(counter);

// };
// const result = countLetter("ia", "a", messageFunction);
// console.log(result);


// (function (str, letter) {
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             counter++
//         }
//     }
//     console.log(counter);
// })("i am sajajd alig gohari", "i");


// const numbers = [1, 2, 4, 6, 7,  9];
// const newNumbers = [];

// numbe     s.forEach((number) => {
//     newNumbers.push(number * 2);
// });

// console.log(newNumbers);

// const numbers = [1, 2, 4, 6, 7,  9];

// const newNumbers = numbers.map(number => number * 2); 
// console.log(newNumbers);


// const numbers = [1, 2, 4, 6, 7,  9];
// const newNumbers = numbers.map((number) => {
//     return number *3;
// });

// console.log(newNumbers);


// const numbers = [1, 2, 4, 6, 7,  9];
// const newNumbers = numbers.map(number => number * 2);
// console.log(newNumbers);

// const numbers = [1, 2, 4, 5, 2, 6, 5, 9];
// let acc = 0;

// numbers.forEach((number) => (acc += number));


// console.log(acc);

// const result = numbers.reduce((accumulator, currentValue, index,
//     array) => accumulator + currentValue,0);

// console.log(result);

// Challenge 1. Find customers with age>60 and age<10
// Challenge 2. Build customer data with title and full name

// const customers = [
//     {
//         id: 1,
//         f_name: "Abby",
//         l_name: "Thomas",
//         gender: "M",
//         married: true,
//         age: 32,
//         expense: 500,
//         purchased: ["Shampoo", "Toys", "Book"],
//     },
//     {
//         id: 2,
//         f_name: "Jerry",
//         l_name: "Tom",
//         gender: "M",
//         married: false,
//         age: 64,
//         expense: 100,
//         purchased: ["Stick", "Blade"],
//     },
//     {
//         id: 3,
//         f_name: "Dianna",
//         l_name: "Cherry",
//         gender: "F",
//         married: false,
//         age: 22,
//         expense: 1500,
//         purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//     },
//     {
//         id: 4,
//         f_name: "Dev",
//         l_name: "Currian",
//         gender: "M",
//         married: true,
//         age: 82,
//         expense: 90,
//         purchased: ["Book"],
//     },
//     {
//         id: 5,
//         f_name: "Maria",
//         l_name: "Gomes",
//         gender: "F",
//         married: false,
//         age: 7,
//         expense: 300,
//         purchased: ["Toys"],
//     },
// ];


//   1
// filter

// const over60 = customers.filter((customer) => customer.age > 60);
// const under10 = customers.filter((customer) => customer.age <= 10);

// console.log(under10);

// 2
// const customersWithTitle = customers.map((customer) => {
//     let title = "";
//     const { f_name, l_name } = customer;

//     if (customer.gender === "M") {
//         title = "Mr."
//     } else if (customer.gender === "F" && customer.married) {
//         title = "Mrs."
//     } else {
//         title = "Miss" 
//     }
//     customer.fullName = `${title} ${f_name} ${l_name}`;
//     return customer;
// });
// console.log(customersWithTitle);


// const customersWithTitle = customers.map((customer) => {
//     let title = "";
//     const { f_name, l_name } = customer;
//     if (customer.gender === "M") {
//         title = "Mr."
//     } else if (customer.gender === "F" && customer.married) {
//         title = "Mrs."
//     } else {
//         title = "Miss"
//     }
//     customer.fullName = `${title} ${f_name} ${l_name}`;
//     return customer;
// });
// const unMariedPersone = customers.filter((customer) => customer.married === false && customer.age < 33 && customer.gender === "F");

// console.log(unMariedPersone);
// // console.log(customersWithTitle);


// -----------------------------
//this 
// globalThis.age = 35;
// function showAge(){
//     console.log(age);
// }


// const data = {
//     name: "Sajjad",
//     showAge2: function(){
//         console.log(this);
//     }
// }

// data.showAge2();

// const data = {
//     name: "Sajjad",
//     show(){
//         console.log(this.name);
//     }
// };

// data.show();


// const data = {
//     f: "sajjad",
//     l: "gohari",
//     get fulllame() {
//         return `${data.f} ${data.l}`;
//     },
// };

// console.log(data.fulllame);

// in   function       setter and getter 
// const data = {
//     firstName: "Milad",
//     lastName: "Azami",
//     get fullName() {
//         return `${data.firstName} ${data.lastName}`;
//     },
//     set fullName(string) {
//         // this.firstName = string.split(" ")[0];
//         // this.lastName = string.split(" ")[1];
//         [this.firstName, this.lastName] = string.split(" ");
//     },
// };


// data.fullName = "Sajjad Gohari";
// console.log(data);




// Closure in function 
// State retention
// Encapsulation

// const like = () =>{
// let likesCounter = 0;
// likesCounter++;
// return likesCounter;
// };
// console.log(like());

// let likesCounter = 0;

// const like = () => {
//     likesCounter++;
//     return likesCounter;
// };
// console.log(like());
// console.log(like());

// now at example up we have some problem we use this bellow solution
// >>>>> Closure

// 3 key in lesson
// 1 State Retention
// 2 Encapsulation
// 3 Memorization

// function like() {
//     let likesCounter = 0;

//     return function () {
//         likesCounter++;
//         return likesCounter;
//     }
// }

// const increaseLike = like();
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());

// const increaselike2 = like();
// console.log(increaselike2());

// likesCounter += 5;

// ---------------------------------

// pure and impure  done

// ---------------------------------

// Math
// random

// const generateRandom = (min, max) => {
//     if (!min && !max) {
//         return "Enter Min and Max";
//     }
//     if (!max) {
//         max = min;
//         min = 0;
//     }
//     const result = min + Math.floor(Math.random() * (max - min + 1));

//     if (result === 6) {
//         console.log("you win!");
//     } else {
//         console.log("you lose!");
//     }
//     return result;
// };

// console.log(generateRandom(10, 15));

// const date = new Date(1709408066507);
// console.log(date);

// const date = new Date();
// console.log(date);

// console.log(date.toLocaleDateString());

// let counter = 0;

// const count = () => {
//     counter++;
//     console.log("Log: ", counter);
//     if(counter >= 5){
//         console.log("Finish");
//         clearInterval(interval);
//     }
// };

// const interval = setInterval(count, 1000);

// const timeOut = setTimeout(() => {
//     console.log("sajjad");
// }, 3000);

//3/11/1998

// const determineAge = (birthDate)=> {
// const birthDateMS = new Date(birthDate).getTime();
// const now = new Date().getTime();
// const ageMS = now - birthDateMS;
// const oneDay = 24 * 60 * 60 * 1000; //ms
// const age = Math.floor(ageMS / oneDay);

// return age;

// };

// console.log("Your are:", determineAge("3/11/1998"),"years old"); 

// const makeString = (arr) => {
//     console.log(arr.join(" "));
// };

// try {
//     makeString();
//     console.log("Done!");
// } catch (error) {
//     console.log("please try later");
//     throw "An error occured!"
// }


// const myMap = new Map();
// myMap.set("name", "sajjad").set("age", 20).set(5, 30);


// const keys = myMap.keys();
// for (const key of keys){
//     console.log(key);
// }

// const myMap = new Map();
// myMap.set("name", "sajjad").set("age", 20).set(5, 30);


// const values = myMap.values();
// for (const value of values){
//     console.log(value);
// }

// const arr = [1, 3, 4, 3, 2, 2, 5, 1, 7,8,9,0,8,10];

// const newSet = new Set(arr);
// const newArr = [...newSet]
// console.log(newArr);

// const newArr = [...new Set(arr)];
// console.log(newArr);


// const value = prompt();

// const choices = ["rock", "paper", "scissors"];
// let playerScore = 0;
// let computerScore = 0;


// const checkWinner = (player, computer) => {
//     if (player === computer) {
//         return "draw!";
//     } else if (player === "rock") {
//         return computer === "scissors" ? "player-win" : "computer-win";
//     } else if (player === "paper") {
//         return computer === "rock" ? "player-win" : "computer-win";
//     } else {
//         return computer === "paper" ? "player-win" : "computer-win";
//     };
// };

// const showResult = (result) => {
//     if(result === "player-win"){
//         console.log("You Win.");
//         playerScore++;
//     }else if (result === "computer-win"){
//         console.log("You Lose.");
//         computerScore++;
//     }else{
//         console.log("Draw.");
//     }
//     console.log(`Your score: ${playerScore}`);
//     console.log(`Computer's score: ${computerScore}`);
//     console.log("......................");
// };


//     const play = () => {
//         if (playerScore === 3 || computerScore === 3) {
//             if (playerScore > computerScore) {
//                 console.log("You Win the Game!");
//             } else if (playerScore < computerScore) {
//                 console.log("Computer Wins the Game!");
//             } else {
//                 console.log("It's a Tie!");
//             }
//             console.log("Game Over");
//             return;
//         }

//         const playerChoise = prompt("Choose rock, paper, scissors");
//         if (choices.indexOf(playerChoise?.toLocaleLowerCase()) !== -1) {
//             console.log(`You Choose ${playerChoise}.`);
//         } else {
//             console.log("You Cheated!");
//             return;
//         }


//         const randomNumer = Math.floor(Math.random() * choices.length);
//         const computerChoise = choices[randomNumer];
//         console.log(`Computer Choose ${computerChoise}`);

//         const gameResult = checkWinner(playerChoise, computerChoise);
//         showResult(gameResult);
//         play();
//     };

//     play();

const randomNumer = Math.ceil(Math.random() * 100);
let numberOfGuess = 0;
const maxGuesses = 10;


const validateNumber = value => {
    if (isNaN(value)) {
        return "Please enter a valid number!";
    } else if (+value < 1 || +value > 100) {
        return "Please enter a number between 1 to 100";
    }
};



const checkGuess = (guess) => {
    numberOfGuess++;
    if (guess === randomNumer) {
        console.log("<<<<<< !!! You guessed correctly. !!! >>>>>>");
        return;
    } else {
        console.log(`You have ${maxGuesses - numberOfGuess} chance(s) left!`);
        if (guess < randomNumer) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }

        if (numberOfGuess === maxGuesses) {
            console.log("Game Over! You have used all your chances.");
            return;
        } else if (numberOfGuess >= maxGuesses) {
            console.log("Game Over! You have no chances left.");
            return;
        } else {
            play();
        }
    }
};


    const play = () => {
        const number = prompt("Guess a number between 1 and 100");
        console.log(`You guessed: ${number}.`);
        if (number === null) return;
        const validation = validateNumber(number);
        if (validation) {
            console.log(validation);
            return play();
        }
        checkGuess(+number);
    };

    play();



