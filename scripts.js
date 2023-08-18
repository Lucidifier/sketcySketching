//GET  USER GRID SIZE
function getUserGrid() {
	let userGrid = prompt('Enter grid size');
	return userGrid;
}

let userGridSize = getUserGrid();
console.log(userGridSize);

let n = ((800 / userGridSize)-2) + 'px';
console.log(n);

//CREATE GRID
function createGrid () {
	let divContainerItem = document.querySelector('.container-div');
	for (let i = 0; i < userGridSize * userGridSize; i++) {
		let tempDiv =	document.createElement('div');
		tempDiv.classList.toggle('sketch-box');
		tempDiv.style.width = (n);
		tempDiv.style.height = (n);
		divContainerItem.appendChild(tempDiv);

		let randomColor;
		function getRandomColor() {
			function getRandomRGB () {
				return Math.round(0 + Math.random() * (255-0));
			}
			randomColor = 'rgb(' + getRandomRGB() + ', ' + getRandomRGB() + ', ' + getRandomRGB() + ')';
			console.log(randomColor); 
			return randomColor;
		}
		getRandomColor();
		console.log(randomColor); 

		//HOVER EFFECT
		function changeColorHover(box) {
		box.addEventListener('mouseenter', () => {box.style.backgroundColor = randomColor})};
		
		changeColorHover(tempDiv);
	}
}

//RANDOM COLOR GENERATOR



createGrid();
