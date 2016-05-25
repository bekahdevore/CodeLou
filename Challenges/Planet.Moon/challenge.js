// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

//Way 1
var newDiv = document.createElement('div');
		newDiv.className = 'planet';
		newDiv.style.background = "blue";
		document.body.appendChild(newDiv);

//Way 2
// var newDiv = document.createElement('div');
// 	newDiv.className = "planet";
// 	newDiv.style.cssText = 'background:blue;';
// 	document.body.appendChild(newDiv);

//Way 3
// document.body.innerHTML += 
// '<div style="background:blue;" class="planet"><div class ="moon"></div></div>';


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.

// Way 1
var newDiv2 = document.createElement('div');
	newDiv2.className = "moon";
	newDiv.appendChild(newDiv2);






