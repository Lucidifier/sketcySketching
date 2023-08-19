//GET  USER GRID SIZE
function getUserGrid() {
	let userGrid = prompt('Enter grid size');
	return userGrid;
}

let userGridSize = getUserGrid();
console.log(userGridSize);

let n = ((600 / userGridSize)-2) + 'px';
console.log(n);

//CREATE GRID
function createGrid () {
	let divContainerItem = document.querySelector('.grid-container');
	for (let i = 0; i < userGridSize * userGridSize; i++) {
		let tempDiv =	document.createElement('div');
		tempDiv.classList.toggle('sketch-box');
		tempDiv.style.width = (n);
		tempDiv.style.height = (n);
		divContainerItem.appendChild(tempDiv);

		//RANDOM COLOR GENERATOR
		let randomColor;
		function getRandomColor() {
			function getRandomRGB () {
				return Math.round(0 + Math.random() * (255-0));
			}
			randomColor = 'rgb(' + getRandomRGB() + ', ' + getRandomRGB() + ', ' + getRandomRGB() + ')';
			return randomColor;
		}
		getRandomColor();

		//HOVER EFFECT
		function changeColorHover(box) {
		box.addEventListener('mouseenter', () => {box.style.backgroundColor = randomColor})};
		
		changeColorHover(tempDiv);
	}
}





createGrid();

