const playerFactory = (XorO, turn, won) => {
    return {
        XorO,
        turn,
        won
    };
}

const gameBoard = (() => {
    const player1 = playerFactory("X", true, false);
    const player2 = playerFactory("O", false, false);

    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];

    let board = ['', '', '', '', '', '', '', '', ''];
    
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
        cell.addEventListener('click', (e) => {
            if (player1.turn && cell.childNodes.length === 0 && !player1.won && !player2.won) {
                let mark = document.createElement("h1");
                mark.innerHTML = `${player1.XorO}`;
                cell.appendChild(mark);
                player1.turn = false;
                player2.turn = true;
                board[index] = player1.XorO;
            } else if (player2.turn && cell.childNodes.length === 0 && !player1.won && !player2.won){
                let mark = document.createElement("h1");
                mark.innerHTML = `${player2.XorO}`;
                cell.appendChild(mark);
                player1.turn = true;
                player2.turn = false;
                board[index] = player2.XorO;
            }
            checkWinner();
        })
    });

    function checkWinner() {
        winCombos.forEach ((combo) => {
            if (board[combo[0]] == board[combo[1]] && board[combo[1]] == board[combo[2]] && board[combo[0]] != '') {
                console.log("Winner");

                if (player1.XorO == board[combo[0]]) {
                    player1.won = true;
                } else {
                    player2.won = true;
                }
            }
        });
    };

    return {
        board
    };
})();

const displayController = (() => {
    return {};
})();