var myImage = document.getElementById('labrImg');

myImage.onclick = function changeImage () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/labr-1.jpg') {
        myImage.setAttribute('src', 'images/labr-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/labr-1.jpg');
    }
}


var myImage = document.getElementById('dodikImg');

myImage.onclick = function changeImage () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dodik.jpg') {
        myImage.setAttribute('src', 'images/chmo.jpg');
    } else {
        myImage.setAttribute('src', 'images/dodik.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName () {
    var myName = prompt('введите своеи имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'меня зовут ' + myName + ' и мне нравятся лабрадоры и додики!';
}

if(!localStorage.getItem('namr')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'меня зовут ' + storedName + ' и мне нравятся лабрадоры и додики!';
}

myButton.onclick = function() {
    setUserName();
}