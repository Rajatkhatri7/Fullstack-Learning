// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!!';

// document.querySelector('img').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }



// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/me1.png') {
    myImage.setAttribute ('src','images/me2.jpg');
  } else {
    myImage.setAttribute ('src','images/me1.png');
  }
}
