function startGame() {
    for (let i = 1; i < 10; i++) {
        clearBox(i);
    }
    document.turn = "X";
    if (Math.random() > 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " Gets to start...");
    document.getElementById("s1").style.color = "red";
    document.getElementById("s2").style.color = "red";
    document.getElementById("s3").style.color = "red";
    document.getElementById("s4").style.color = "red";
    document.getElementById("s5").style.color = "red";
    document.getElementById("s6").style.color = "red";
    document.getElementById("s7").style.color = "red";
    document.getElementById("s8").style.color = "red";
    document.getElementById("s9").style.color = "red";
}
function setMessage(msg) {
    document.getElementById('message').textContent = msg;
}
function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.turn + " alreay won the game.");
    } else if (square.textContent == "") {
        square.textContent = document.turn;
        switchTurn();
    } else {
        setMessage("That square is already used.");
    }
}
function switchTurn() {
    if (checkWinner(document.turn)) {
        setMessage("Congratulation " + document.turn + "! You win.")
        document.winner = document.turn;
    } else if (checkTie()) {
        setMessage("It's a TIE..!! Play again..!!!");
    }
    else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    }
    else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}
function checkWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        return true;
    }
    return false;
}
function getBox(number) {
    return document.getElementById("s" + number).textContent;
}
function checkTie() {
    for (let i = 1; i < 10; i++) {
        if (getBox(i) == "") {
            return false;
        }
    }
    return true;
}

function clearBox(a) {
    document.getElementById("s" + a).textContent = "";
}