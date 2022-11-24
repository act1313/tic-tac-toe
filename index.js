const playerFactory = (XorO) => {
    return {
        XorO
    };
}

const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    return {
        board
    };
})();

const displayController = (() => {
    return {};
})();


const cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) =>{
    console.log(cell, index);
})