'use strict';
var score = 0;
var userName = prompt("what is your name?")
confirm("Hi " + userName + ", now we will do a small guess, are you ready?")

// first question
function guessCountry() {
    var myCountry = prompt("Do you think that I am from Jordan?")
    if (myCountry.toLowerCase() == 'y' || myCountry.toLowerCase() == 'yes') {
        alert('No, that is wrong, Iam from syria ^^')
        myCountry = 0
    } else if (myCountry.toLowerCase() == 'n' || myCountry.toLowerCase() == 'no') {
        alert('That is correct!, Iam from syria ^^')
        score++;
    } else {
        alert('Sorry, your input is not valied!')
        myCountry = 0

    }
    return myCountry;
}
guessCountry();

// second question
function guessExperiance() {
    var myExperience = prompt("Do you think that I work before?")
    if (myExperience.toLowerCase() == 'y' || myExperience.toLowerCase() == 'yes') {
        alert('That is right!, you will know more in the website ^^')
        score++;
    } else if (myExperience.toLowerCase() == 'n' || myExperience.toLowerCase() == 'no') {
        alert('wrong answer !^^')
        myExperience = 0
    } else {
        alert('Sorry, your input is not valied!')
        myExperience = 0
    }
    return myExperience;
}
guessExperiance();

// question three
function gueesfavColor() {
    var favColor = prompt("Do you think that I love green?")
    if (favColor.toLowerCase() == 'y' || favColor.toLowerCase() == 'yes') {
        alert('wrong answer !^^')
        favColor = 0
    } else if (favColor.toLowerCase() == 'n' || favColor.toLowerCase() == 'no') {
        alert('That is right!')
        score++;
    } else {
        alert('Sorry, your input is not valied!')
        favColor = 0;
    }
    console.log(favColor);
    return favColor;
}
gueesfavColor();


// question four
function guessHobbies() {
    var myHobbies = prompt("Do you think that I can draw?")
    if (myHobbies.toLowerCase() == 'y' || myHobbies.toLowerCase() == 'yes') {
        alert('That is right!')
        score++;
    } else if (myHobbies.toLowerCase() == 'n' || myHobbies.toLowerCase() == 'no') {
        alert('wrong answer !^^')
        myHobbies = 0
    } else {
        alert('Sorry, your input is not valied!')
        myHobbies = 0
    }
    return myHobbies;
}
guessHobbies();

// question five
function gueesAge() {
    var myAge = prompt("Do you think that I was born in 1997?")
    if (myAge.toLowerCase() == 'y' || myAge.toLowerCase() == 'yes') {
        alert('That is right! ' + userName)
        score++;
    } else if (myAge.toLowerCase() == 'n' || myAge.toLowerCase() == 'no') {
        alert('wrong answer !^^ ' + userName)
        myAge = 0
    } else {
        alert('Sorry, your input is not valied! ' + userName)
        myAge = 0
    }
    return myAge;
}
gueesAge();

// question six
function gueesNumber() {
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

// question seven
function gueesColor() {
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
alert('total score=' + score);
