function sketch() {
	let divContainerItem = document.querySelector('.grid-container');
	let tempDiv;

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

 	//CREATE STARTING 16X16 GRID
	function createGrid16x16() {
	let n1 = ((600 / 16)-2) + 'px';
	for (let i = 0; i < 16 * 16; i++) {
		tempDiv =	document.createElement('div');
		tempDiv.classList.toggle('sketch-box');
		tempDiv.style.width = (n1);
		tempDiv.style.height = (n1);
		divContainerItem.appendChild(tempDiv);
		changeColorRandom(tempDiv);
		}
	}

			//GRID SIZE BUTTON
			function generateNewGrid() {
			let gridSizeButton = document.querySelector('.grid-size-btn');
			gridSizeButton.addEventListener('click', ()=> {
				let tempDivNodeList = document.querySelectorAll('.sketch-box');
				for (let j=0; j<tempDivNodeList.length; j++) {
					tempDivNodeList[j].style.display = ('none');
				}
				createGrid();
			})
		}

//GET  USER GRID SIZE
function getUserGrid() {
	let userGrid = prompt('Enter grid size');
	return userGrid;
}


//CREATE USER GRID
function createGrid () {

	let userGridSize = getUserGrid();
	let n2 = ((600 / userGridSize)-2) + 'px';

	for (let i = 0; i < userGridSize * userGridSize; i++) {
		tempDiv =	document.createElement('div');
		tempDiv.classList.toggle('sketch-box');
		tempDiv.style.width = (n2);
		tempDiv.style.height = (n2);
		divContainerItem.appendChild(tempDiv);

		changeColorRandom(tempDiv);
	}		
}

//ERASER BUTTON
function clearGrid() {
	let clearButton = document.querySelector('.function-btn-2');
	clearButton.addEventListener('click', ()=> {
				let tempDivNodeList = document.querySelectorAll('.sketch-box');
				for (let j=0; j<tempDivNodeList.length; j++) {
					tempDivNodeList[j].style.backgroundColor = ('#C0C0C0');}
})}

		
		createGrid16x16();
		generateNewGrid();
		clearGrid();
	}

	sketch();

