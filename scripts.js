function sketch() {
	let divContainerItem = document.querySelector('.grid-container');
	let tempDiv;
	let modeChange = document.querySelector('.function-btn-1');
	let modeChangeClickCounter = 0;

//RANDOM COLOR GENERATOR
function getRandomColor() {
	let randomColor;
	function getRandomRGB () {
		return Math.round(0 + Math.random() * (255-0));
	}
	randomColor = 'rgb(' + getRandomRGB() + ', ' + getRandomRGB() + ', ' + getRandomRGB() + ')';
	return randomColor;
}

	//HOVER COLOR  MODE CHANGE
	function modeSelector() {
		modeChange.addEventListener('click', ()=> {
			modeChangeClickCounter++;
			let tempDivNodeList2 = document.querySelectorAll('.sketch-box');
				for (let m=0; m<tempDivNodeList2.length; m++) {
			if(modeChangeClickCounter == 0 | modeChangeClickCounter%2 == 0) {
				modeChange.style.backgroundImage = ('url("./images/buttonblack-img.png")');
				changeColorBlack(tempDivNodeList2[m]);
			} else {
				modeChange.style.backgroundImage = ('url("./images/buttonrgb-img.png")');
				changeColorRandom(tempDivNodeList2[m]);
			}
		}
			 });
		}
	
	//HOVER EFFECT  BLACK COLOR
	function changeColorBlack (box) {
		box.addEventListener('mouseenter', () => {box.style.backgroundColor = ('black')})
	}

	//HOVER EFFECT RANDOM COLOR
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
		changeColorBlack(tempDiv);
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
		if(modeChangeClickCounter == 0 | modeChangeClickCounter%2 == 0) {
			changeColorBlack(tempDiv);
		} else {
			changeColorRandom(tempDiv);
		}
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
		modeSelector();
}

	sketch();

