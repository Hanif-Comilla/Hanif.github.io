var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'img/mozila.png') {

	myImage.setAttribute ('src','img/mozila1.png');
	}
	  else if(mySrc === 'img/mozila1.png'){
	  myImage.setAttribute ('src','img/mozila2.jpg');
	}
	 else if(mySrc === 'img/mozila2.jpg'){
	  myImage.setAttribute ('src','img/mozila3.jpg');
	}
    
   	else {
	  myImage.setAttribute ('src','img/mozila.png');
	}
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name'))
	{
       setUserName();
    }
 else 
 {
   var storedName = localStorage.getItem('name');
   myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
 }

myButton.onclick = function() {
  setUserName();
}