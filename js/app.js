'use strict';
var score=0;
var userName = prompt("what is your name?")
confirm("Hi " + userName + ", now we will do a small guess, are you ready?")

// first question
function guessCountry(){
    var myCountry = prompt("Do you think that I am from Jordan?")
if (myCountry.toLowerCase() == 'y' || myCountry.toLowerCase() == 'yes') {
    alert('No, that is wrong, Iam from syria ^^')
    myCountry = 0
    //console.log("No, that is wrong, Iam from syria ^^")
} else if (myCountry.toLowerCase() == 'n' || myCountry.toLowerCase() == 'no') {
    alert('That is correct!, Iam from syria ^^')
    //console.log("That is correct!, Iam from syria")
   score++;
} else {
    alert('Sorry, your input is not valied!')
    myCountry = 0

}
return myCountry ;
}
guessCountry();
/*
} 
var myCountry = prompt("Do you think that I am from Jordan?")
if (myCountry.toLowerCase() == 'y' || myCountry.toLowerCase() == 'yes') {
    alert('No, that is wrong, Iam from syria ^^')
    myCountry = 0
    //console.log("No, that is wrong, Iam from syria ^^")
} else if (myCountry.toLowerCase() == 'n' || myCountry.toLowerCase() == 'no') {
    alert('That is correct!, Iam from syria ^^')
    //console.log("That is correct!, Iam from syria")
    myCountry = 1
} else {
    alert('Sorry, your input is not valied!')
    myCountry = 0
}
//console.log("Sorry, your input is not valied!"")
*/
// second question
function guessExperiance(){
var myExperience = prompt("Do you think that I work before?")
if (myExperience.toLowerCase() == 'y' || myExperience.toLowerCase() == 'yes') {
    alert('That is right!, you will know more in the website ^^')
    score++;
    //console.log("That is right!, you will know more in the website ^^")
} else if (myExperience.toLowerCase() == 'n' || myExperience.toLowerCase() == 'no') {
    alert('wrong answer !^^')
    myExperience = 0
    //console.log("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied!')
    myExperience = 0
}
return myExperience;
}
guessExperiance();
/*
var myExperience = prompt("Do you think that I work before?")
if (myExperience.toLowerCase() == 'y' || myExperience.toLowerCase() == 'yes') {
    alert('That is right!, you will know more in the website ^^')
    myExperience = 1
    //console.log("That is right!, you will know more in the website ^^")
} else if (myExperience.toLowerCase() == 'n' || myExperience.toLowerCase() == 'no') {
    alert('wrong answer !^^')
    myExperience = 0
    //console.log("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied!')
    myExperience = 0
}
//console.log("Sorry, your input is not valied!"")
*/
// question three
function gueesfavColor(){
    var favColor = prompt("Do you think that I love green?")
if (favColor.toLowerCase() == 'y' || favColor.toLowerCase() == 'yes') {
    alert('wrong answer !^^')
    favColor = 0
    //console.log("wrong answer !^^")
} else if (favColor.toLowerCase() == 'n' || favColor.toLowerCase() == 'no') {
    alert('That is right!')
    score++;
    //console.log("That is right!")
} else {
    alert('Sorry, your input is not valied!')
    favColor = 0;   
}
console.log(favColor);
return favColor;
}
gueesfavColor();

/*
var favColor = prompt("Do you think that I love green?")
if (favColor.toLowerCase() == 'y' || favColor.toLowerCase() == 'yes') {
    alert('wrong answer !^^')
    favColor = 0
    //console.log("wrong answer !^^")
} else if (favColor.toLowerCase() == 'n' || favColor.toLowerCase() == 'no') {
    alert('That is right!')
    favColor = 1
    //console.log("That is right!")
} else {
    alert('Sorry, your input is not valied!')
    favColor = 0
}
//console.log("Sorry, your input is not valied!")
*/
// question four
function guessHobbies(){
    var myHobbies = prompt("Do you think that I can draw?")
if (myHobbies.toLowerCase() == 'y' || myHobbies.toLowerCase() == 'yes') {
    alert('That is right!')
    score++;
    //console.log ("That is right!")
} else if (myHobbies.toLowerCase() == 'n' || myHobbies.toLowerCase() == 'no') {
    alert('wrong answer !^^')
    myHobbies = 0
    //console.log ("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied!')
    myHobbies = 0
}
return myHobbies;
}
guessHobbies();
/*
var myHobbies = prompt("Do you think that I can draw?")
if (myHobbies.toLowerCase() == 'y' || myHobbies.toLowerCase() == 'yes') {
    alert('That is right!')
    myHobbies = 1
    //console.log ("That is right!")
} else if (myHobbies.toLowerCase() == 'n' || myHobbies.toLowerCase() == 'no') {
    alert('wrong answer !^^')
    myHobbies = 0
    //console.log ("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied!')
    myHobbies = 0
}
//console.log ("Sorry, your input is not valied!")
*/
// question five
function gueesAge(){
    var myAge = prompt("Do you think that I was born in 1997?")
if (myAge.toLowerCase() == 'y' || myAge.toLowerCase() == 'yes') {
    alert('That is right! ' + userName)
    score++;
    //console.log ("That is right!")
} else if (myAge.toLowerCase() == 'n' || myAge.toLowerCase() == 'no') {
    alert('wrong answer !^^ ' + userName)
    myAge = 0
    //console.log ("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied! ' + userName)
    myAge = 0
}
return myAge;
}
gueesAge();
/*
var myAge = prompt("Do you think that I was born in 1997?")
if (myAge.toLowerCase() == 'y' || myAge.toLowerCase() == 'yes') {
    alert('That is right! ' + userName)
    myAge = 1
    //console.log ("That is right!")
} else if (myAge.toLowerCase() == 'n' || myAge.toLowerCase() == 'no') {
    alert('wrong answer !^^ ' + userName)
    myAge = 0
    //console.log ("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied! ' + userName)
    myAge = 0
}
//console.log ("Sorry, your input is not valied!")
*/


// question six
function gueesNumber()
{
alert('You will start a guess game')
var i = 0;
var answer = '7';
var userGuess;
while (i < 4) {
    userGuess = parseInt(prompt('guess a nubmer between 1 & 10'))
    if (answer > userGuess) {
        alert('too low')
    } else if (answer < userGuess) {
        alert('too high')
    } else if (answer == userGuess) {
        alert('great!!. correct answer')
        break;
    }
    i++;
}
if (userGuess === 7) {
    score++;
} else {
    userGuess = 0
}
alert('The correct answer is 7 <3')
return userGuess;
}
gueesNumber();
/*
alert('You will start a guess game')
var i = 0;
var answer = '7';
var userGuess;
while (i < 4) {
    userGuess = parseInt(prompt('guess a nubmer between 1 & 10'))
    if (answer > userGuess) {
        alert('too low')
    } else if (answer < userGuess) {
        alert('too high')
    } else if (answer == userGuess) {
        alert('great!!. correct answer')
        break;
    }
    i++;
}
if (userGuess === 7) {
    userGuess = 1
} else {
    userGuess = 0
}
alert('The correct answer is 7 <3')
*/
// question saven
function gueesColor(){
var a = 0;
var colors = ["red", "blue", "pink", "grey", "green", "black"];
var colorGuess;
while (a < 6) {
    colorGuess = (prompt('guess a color'))
    if (colorGuess.toLowerCase() == colors[0] || colorGuess.toLowerCase() == colors[1] || colorGuess.toLowerCase() == colors[2] || colorGuess.toLowerCase() == colors[3] || colorGuess.toLowerCase() == colors[4] || colorGuess.toLowerCase() == colors[5]) {
        alert('correct! <3')
        score++;
        break;
    } else {
        alert('wrong answer :P')
        colorGuess = 0
    }
    a++;
    console.log(colorGuess);
}
return colorGuess;
}
gueesColor();
alert('total score='+ score);
/*
var a = 0;
var colors = ["red", "blue", "pink", "grey", "green", "black"];
var colorGuess;
while (a < 6) {
    colorGuess = (prompt('guess a color'))
    if (colorGuess.toLowerCase() == colors[0] || colorGuess.toLowerCase() == colors[1] || colorGuess.toLowerCase() == colors[2] || colorGuess.toLowerCase() == colors[3] || colorGuess.toLowerCase() == colors[4] || colorGuess.toLowerCase() == colors[5]) {
        alert('correct! <3')
        colorGuess = 1
        break;
    } else {
        alert('wrong answer :P')
        colorGuess = 0
    }
    a++;
    console.log(colorGuess);
}
*/

//alert('your score is ' + (userGuess + myAge + myCountry + myExperience + colorGuess + myHobbies + favColor) + '/7')