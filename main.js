const board = document.getElementById('board');
const rainbowButton = document.querySelector('.rainbow__mode');
const blackButton = document.querySelector('.black__mode');
const grayButton = document.querySelector('.gray__mode');
const clearButton = document.querySelector('clear__board');
const erasorButton = document.querySelector('.erasor');

let color = '#000';

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
    } else {
        console.log('ERROR! Too many squares');
    }
};
