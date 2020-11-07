// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!!';

// document.querySelector('img').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }



// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/me1.png') {
        myImage.setAttribute('src', 'images/me2.jpg');
    } else {
        myImage.setAttribute('src', 'images/me1.png');
    }
}

// Personalize greeting

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {

    let myName = prompt('Enter your name : ');
    if (!myName) {
        setUsername();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hey there, ' + myName;
    }

}


// calling the functiion

if (!localStorage.getItem('name')) {

    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey there, ' + storedName;

}

myButton.onclick = function () {
    setUsername();
}

// what if user does not enter a name in that case we use if else statement to chk condition  