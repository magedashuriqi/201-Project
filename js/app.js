'use strict';

var userName = prompt("what is your name?")
confirm("Hi "+ userName+ ", now we will do a small guess, are you ready?")

var myCountry = prompt("Do you think that I am from Jordan?")
if(myCountry.toLowerCase()=='y' || myCountry.toLowerCase()=='yes' ){
alert('No, that is wrong, Iam from syria ^^')
//console.log("No, that is wrong, Iam from syria ^^")
} else if (myCountry.toLowerCase()=='n' || myCountry.toLowerCase()=='no') {
alert ('That is correct!, Iam from syria ^^')
//console.log("That is correct!, Iam from syria")
alert ('Sorry, your input is not valied!')
}
//console.log("Sorry, your input is not valied!"")


var myExperience = prompt("Do you think that I work before?")
if(myExperience.toLowerCase()=='y' ||myExperience.toLowerCase()=='yes' ){
alert('That is right!, you will know more in the website ^^')
//console.log("That is right!, you will know more in the website ^^")
} else if (myExperience.toLowerCase()=='n' || myExperience.toLowerCase()=='no') {
alert ('wrong answer !^^')
//console.log("wrong answer !^^")
} else {
alert ('Sorry, your input is not valied!')
}
//console.log("Sorry, your input is not valied!"")

var favColor = prompt("Do you think that I love green?")
if(favColor.toLowerCase()=='y' || favColor.toLowerCase()=='yes' ){
alert('wrong answer !^^')
//console.log("wrong answer !^^")
} else if (favColor.toLowerCase()=='n' || favColor.toLowerCase()=='no') {
alert ('That is right!')
//console.log("That is right!")
} else {
alert ('Sorry, your input is not valied!')
}
//console.log("Sorry, your input is not valied!")

var myHobbies  = prompt("Do you think that I can draw?")
if(myHobbies.toLowerCase()=='y' ||myHobbies.toLowerCase()=='yes' ){
alert('That is right!')
//console.log ("That is right!")
} else if (myHobbies.toLowerCase()=='n' || myHobbies.toLowerCase()=='no') {
alert ('wrong answer !^^')
//console.log ("wrong answer !^^")
} else {
alert ('Sorry, your input is not valied!')
}
//console.log ("Sorry, your input is not valied!")

var myAge = prompt("Do you think that I was born in 1997?")
if(myAge.toLowerCase()=='y' ||myAge.toLowerCase()=='yes' ){
alert('That is right! '+ userName)
//console.log ("That is right!")
} else if (myAge.toLowerCase()=='n' || myAge.toLowerCase()=='no') {
alert ('wrong answer !^^ ' + userName)
//console.log ("wrong answer !^^")
} else {
alert ('Sorry, your input is not valied! '+ userName)
}
//console.log ("Sorry, your input is not valied!")




