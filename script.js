// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
let string1 = "I am a";
let string2 = "Kalvian";
let result = string1 + " " + string2;
console.log(result);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
let string3 = 'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(string3);

// Challenge 3: Store a string in a variable and display the length of the string.
let helloworld = "Hello, world!";
let length = helloworld.length;
console.log(helloworld);
// Challenge 4: Store a string in a variable and convert it into uppercase.
let letsgo = "Lets go!";
let uppercase_letsgo = letsgo.toUpperCase();
console.log(uppercase_letsgo);
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
let ilprgrm = "I love programming";
let new_ilprgrm = ilprgrm.replace("programming", "JavaScript programming");
console.log(new_ilprgrm);
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
let Hehe = "He";
let new_Hehe = Hehe.repeat(3);
console.log(new_Hehe);
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
let imkvn = "I am a Kalvian";
let array = imkvn.split(" ");
console.log(array);
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
let TATWFN = "Time and Tide wait for none";
let index = TATWFN.indexOf("Ti");
console.log(index);
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
let Lemon = "When life gives you lemons make lemonade";
if (Lemon.includes("lemon")) {
    console.log("The string contains 'lemon'");
} else {
    console.log("The string does not contain 'lemon'");
}
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
let string = "You must be the change you wish to see in the world.";
let change = string.slice(16,22);
let world = string.substring(46,51);
console.log(change);
console.log(world);