/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world! / Привіт, світ!';*/

let myImage = document.querySelector('img');
myImage.onclick = function() {
   let mySrc = myImage.getAttribute('src');
/*   alert('mySrc='+ mySrc);*/
   if(mySrc === '/firefox-icon.png') {
      myImage.setAttribute('src', '/boxes.jpg');
   } else {
      myImage.setAttribute('src', '/firefox-icon.png');
   }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
   let myName = prompt("Please, enter your name / Будь ласка, введіть своє ім'я");
      if(!myName || myName === null){
         setUserName();
      }else{
         localStorage.setItem('name', myName);
         myHeading.textContent = 'Welcome / Добридень, ' + myName + '!';
      }
}

if(!localStorage.getItem('name')){
   setUserName();
}else{
   let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Hello(Привіт), ' + storedName;
}

myButton.onclick = function() {
   setUserName();
}
