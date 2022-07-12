let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/picture.jpeg') {
      myImage.setAttribute('src', 'images/picture2.png');
    } else {
      myImage.setAttribute('src', 'images/picture.jpeg');
    }
}

let myButton  = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome dear ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome here again, dear ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}