let turn = "X";
let cells = document.querySelectorAll(".cell");
let board = document.getElementsByClassName('board')
let light = true;
function placeMark(cell) {
	if (!cell.textContent) {
		cell.textContent = turn;
		if (checkWin()) {
			alert(turn + " wins!");
			reset();
		} else if (checkDraw()) {
			alert("It's a draw!");
			reset();
		} else {
			turn = turn === "X" ? "O" : "X";
		}
	}
}

function checkWin() {
	return (
		checkRow(0, 1, 2) || checkRow(3, 4, 5) || checkRow(6, 7, 8) ||
		checkRow(0, 3, 6) || checkRow(1, 4, 7) || checkRow(2, 5, 8) ||
		checkRow(0, 4, 8) || checkRow(2, 4, 6)
	);
}

function checkRow(a, b, c) {
	return (
		cells[a].textContent &&
		cells[a].textContent === cells[b].textContent &&
		cells[b].textContent === cells[c].textContent
	);
}

function checkDraw() {
	return Array.from(cells).every(cell => cell.textContent);
}

function reset() {
	cells.forEach(cell => cell.textContent = "");
	turn = "X";
}

function toggleTheme() {
	const body = document.querySelector("body");
	if(light){
		body.classList.remove('light-theme')
		body.classList.add("dark-theme");
		light = false;
	}
	else{
		body.classList.remove('dark-theme')
		body.classList.add("light-theme");
		light = true;
	}
}
function resetGame() {
	cells.forEach(cell => cell.textContent = "");
	turn = "X";
}
