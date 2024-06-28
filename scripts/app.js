// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// first we are going to want to make a empty string to hold our new string
// we'll then make a for loop to repeat how many times we need it to, it will start at one.
// if the number of times we want it to repeat is less then one it will go one time. meaning it will display at least once
// if n = 3 then it will repeat 3 times
// for everytime it loops it adds 1 to the new string
// return the repeated string
function repeatStr(n, s){
    let repeat = '';
    for(i = 1; i <= n; i++){
        repeat += s;
    }
    return repeat;
}

// this one used the .repeat() method, which would have been quicker and cleaner
// it basically returns the string (s) x (n) times
function repeatStr(n, s){
    return s.repeat(n);
}