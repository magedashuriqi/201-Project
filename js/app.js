'use strict';

var userName = prompt("what is your name?")
confirm("Hi " + userName + ", now we will do a small guess, are you ready?")

var myCountry = prompt("Do you think that I am from Jordan?")
if (myCountry.toLowerCase() == 'y' || myCountry.toLowerCase() == 'yes') {
    alert('No, that is wrong, Iam from syria ^^')
    //console.log("No, that is wrong, Iam from syria ^^")
} else if (myCountry.toLowerCase() == 'n' || myCountry.toLowerCase() == 'no') {
    alert('That is correct!, Iam from syria ^^')
    //console.log("That is correct!, Iam from syria")
} else {
    alert('Sorry, your input is not valied!')
}
//console.log("Sorry, your input is not valied!"")


var myExperience = prompt("Do you think that I work before?")
if (myExperience.toLowerCase() == 'y' || myExperience.toLowerCase() == 'yes') {
    alert('That is right!, you will know more in the website ^^')
    //console.log("That is right!, you will know more in the website ^^")
} else if (myExperience.toLowerCase() == 'n' || myExperience.toLowerCase() == 'no') {
    alert('wrong answer !^^')
    //console.log("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied!')
}
//console.log("Sorry, your input is not valied!"")

var favColor = prompt("Do you think that I love green?")
if (favColor.toLowerCase() == 'y' || favColor.toLowerCase() == 'yes') {
    alert('wrong answer !^^')
    //console.log("wrong answer !^^")
} else if (favColor.toLowerCase() == 'n' || favColor.toLowerCase() == 'no') {
    alert('That is right!')
    //console.log("That is right!")
} else {
    alert('Sorry, your input is not valied!')
}
//console.log("Sorry, your input is not valied!")

var myHobbies = prompt("Do you think that I can draw?")
if (myHobbies.toLowerCase() == 'y' || myHobbies.toLowerCase() == 'yes') {
    alert('That is right!')
    //console.log ("That is right!")
} else if (myHobbies.toLowerCase() == 'n' || myHobbies.toLowerCase() == 'no') {
    alert('wrong answer !^^')
    //console.log ("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied!')
}
//console.log ("Sorry, your input is not valied!")

var myAge = prompt("Do you think that I was born in 1997?")
if (myAge.toLowerCase() == 'y' || myAge.toLowerCase() == 'yes') {
    alert('That is right! ' + userName)
    //console.log ("That is right!")
} else if (myAge.toLowerCase() == 'n' || myAge.toLowerCase() == 'no') {
    alert('wrong answer !^^ ' + userName)
    //console.log ("wrong answer !^^")
} else {
    alert('Sorry, your input is not valied! ' + userName)
}
//console.log ("Sorry, your input is not valied!")




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


var a=0;  
 var colors= ["red","blue","pink","grey","green","black" ];
 var colorGuess ;
 while (a<6) {
     colorGuess =(prompt('guess a color'))
 if (colorGuess.toLowerCase() == colors[0] ||colorGuess.toLowerCase() == colors[1] || colorGuess.toLowerCase() == colors[2]|| colorGuess.toLowerCase() == colors[3]|| colorGuess.toLowerCase() == colors[4]||colorGuess.toLowerCase() == colors[5]){
     alert('correct! <3')
     break;
 }else{
     alert('wrong answer :P')
 }
         a++;
         console.log(colorGuess);
     }

        

 