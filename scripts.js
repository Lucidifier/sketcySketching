function sketch() {
	let divContainerItem = document.querySelector('.grid-container');

	function createGrid16x16() {
	let n = ((600 / 16)-2) + 'px';
	for (let i = 0; i < 16 * 16; i++) {

		let tempDiv =	document.createElement('div');
		tempDiv.classList.toggle('sketch-box');
		tempDiv.style.width = (n);
		tempDiv.style.height = (n);
		divContainerItem.appendChild(tempDiv);

		//RANDOM COLOR GENERATOR
		function getRandomColor() {
			let randomColor;
			function getRandomRGB () {
				return Math.round(0 + Math.random() * (255-0));
			}
			randomColor = 'rgb(' + getRandomRGB() + ', ' + getRandomRGB() + ', ' + getRandomRGB() + ')';
			return randomColor;
		}

		//HOVER EFFECT
		function changeColorRandom(box) {
			 box.addEventListener('mouseenter', () => {box.style.backgroundColor = getRandomColor()});
		}
			changeColorRandom(tempDiv);
			}
			
}

//GET  USER GRID SIZE
function getUserGrid() {
	let userGrid = prompt('Enter grid size');
	return userGrid;
}

// let userGridSize = getUserGrid();
// console.log(userGridSize);

// let n = ((600 / userGridSize)-2) + 'px';
// console.log(n);

//CREATE GRID
function createGrid () {

	let divContainerItem = document.querySelector('.grid-container');
	let userGridSize = getUserGrid();
	let n = ((600 / userGridSize)-2) + 'px';

	for (let i = 0; i < userGridSize * userGridSize; i++) {

		let tempDiv =	document.createElement('div');
		tempDiv.classList.toggle('sketch-box');
		tempDiv.style.width = (n);
		tempDiv.style.height = (n);
		divContainerItem.appendChild(tempDiv);

		//RANDOM COLOR GENERATOR
		function getRandomColor() {
			let randomColor;
			function getRandomRGB () {
				return Math.round(0 + Math.random() * (255-0));
			}
			randomColor = 'rgb(' + getRandomRGB() + ', ' + getRandomRGB() + ', ' + getRandomRGB() + ')';
			return randomColor;
		}

		//HOVER EFFECT
		function changeColorRandom(box) {
			 box.addEventListener('mouseenter', () => {box.style.backgroundColor = getRandomColor()});
		}
			changeColorRandom(tempDiv);
			}
			
		}

		//GRID SIZE BUTTON
		let gridSizeButton = document.querySelector('.grid-size-btn');
		gridSizeButton.addEventListener('click', ()=> {
			createGrid();
		} 
		)
		
		createGrid16x16();
	}

// createGrid();
