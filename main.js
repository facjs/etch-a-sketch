const board = document.getElementById('board');
const errorMessage = document.querySelector('.error__message');
const inputSize = document.getElementById('input-size');
const setButton = document.querySelector('.set__button');

let color = '#000';
errorMessage.style.display = 'none';

const createBoard = (size) => {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');

        square.addEventListener('mouseover', () => {
            if (color == 'random') {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = color;
            }
        });

        setButton.addEventListener('click', () => {
            square.style.backgroundColor = '#fff';
            inputSize.value = '';
        });

        square.style.backgroundColor = '#fff';
        board.appendChild(square);
    }
};

const rand = (min, max) => {
    return min + Math.random() * (max - min);
};

const getRandomColor = () => {
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
};

const colorSquare = (choice) => {
    color = choice;
};

const changeSize = (amount) => {
    if (amount >= 2 && amount <= 100) {
        createBoard(amount);
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'flex';
    }
};

const resetBoard = () => {
    let singleDivs = board.querySelectorAll('div');
    singleDivs.forEach((div) => div.remove());
    changeSize(16);
};
