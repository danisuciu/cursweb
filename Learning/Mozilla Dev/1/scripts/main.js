// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
//
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// }
//     else {
//     alert('Awww, but chocolate is my favourite...');
// }

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function (ev) {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function (ev) {
    setUserName();
}
