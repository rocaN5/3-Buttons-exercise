const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const resetButton = document.getElementById('reset');

redButton.addEventListener('click', () =>{
  redButton.style.display = 'none';
});

yellowButton.addEventListener('click', () =>{
  yellowButton.style.display = 'none';
});

blueButton.addEventListener('click', () =>{
  blueButton.style.display = 'none';
});

resetButton.addEventListener('click', () =>{
  redButton.style.display = 'block';
  yellowButton.style.display = 'block';
  blueButton.style.display = 'block';
});