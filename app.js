const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');


player1.addEventListener('click', function () {
    const currentScore = document.getElementById('p1Score').textContent;
    currentScoreInt = parseInt(currentScore, 10);
    newScore = currentScoreInt + 1;
    p1Score.textContent = newScore;
})
player2.addEventListener('click', function () {
    const currentScore = document.getElementById('p2Score').textContent;
    currentScoreInt = parseInt(currentScore, 10);
    newScore = currentScoreInt + 1;
    p2Score.textContent = newScore;
})

const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    p1Score.textContent = '0';
    p2Score.textContent = '0';
})

// Colors

const p1Style = document.getElementById('p1Score');
const p2Style = document.getElementById('p2Score');

if (p1Score > p2Score) {
    p1Style.style.color = 'green';
    p2Style.style.color = 'red';
} else if (p2Score > p1Score) {
    p2Style.style.color = 'green';
    p1Style.style.color = 'red';
} else {
    p2Style.style.color = 'black';
    p1Style.style.color = 'black';
}


