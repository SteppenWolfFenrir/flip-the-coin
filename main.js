const coinHeads = document.querySelector('.coin__heads');
const coinTails = document.querySelector('.coin__tails');

const randomButton = document.querySelector('.button--random');
const coinButton = document.querySelector('.button--coin');

const resultText = document.querySelector('.main__result');

const handleClick = () => {
  const randomValue = Math.floor(Math.random() * 2);

  if (randomValue === 1) {
    coinHeads.style.display = 'block';
    coinTails.style.display = 'none';
    resultText.textContent = 'Heads';
  } else {
    coinHeads.style.display = 'none';
    coinTails.style.display = 'block';
    resultText.textContent = 'Tails';
  }
}

[randomButton, coinButton].forEach(btn => {
  btn.addEventListener('click', handleClick);
});