const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const resetButton = document.getElementById('reset');
const img = document.getElementById('image');

let timeValue = 3;
let sadRed = false;
let sadYellow = false;
let sadBlue = false;
let j = 0;

// Обработчик событий на красную кнопку
redButton.addEventListener('click', () =>{
  let i = 100;
  let counter = setInterval(timer, timeValue);

  function timer(){
    if(i <= 0){
        clearInterval(counter);
        let counterDisplay = setTimeout(timerDisplay, 400);
        function timerDisplay (){
          redButton.style.display = 'none';
          sadRed = true;
          allDisabled();
          clearTimeout(counterDisplay);
        };
    };
    sadRed = false;
    i--;
    redButton.style.opacity = i / 100;
  };
});

// Обработчик событий на жёлтую кнопку
yellowButton.addEventListener('click', () =>{
  let i = 100;
  let counter = setInterval(timer, timeValue);

  function timer(){
    if(i <= 0){
        clearInterval(counter);
        let counterDisplay = setTimeout(timerDisplay, 400);
        function timerDisplay (){
          yellowButton.style.display = 'none';
          sadYellow = true;
          allDisabled();
          clearTimeout(counterDisplay);
        };
    };
    sadYellow = false;
    i--;
    yellowButton.style.opacity = i / 100;
  };
});

// Обработчик событий на синюю кнопку
blueButton.addEventListener('click', () =>{
  let i = 100;
  let counter = setInterval(timer, timeValue);

  function timer(){
    if(i <= 0){
        clearInterval(counter);
        let counterDisplay = setTimeout(timerDisplay, 400);
        function timerDisplay (){
          blueButton.style.display = 'none';
          sadBlue = true;
          allDisabled();
          clearTimeout(counterDisplay);
        };
    };
    sadBlue = false;
    i--;
    blueButton.style.opacity = i / 100;
  };
});

// При нажатыъ трёх кнопках вылазит смайлик
function allDisabled(){
  if(sadRed == true && sadYellow == true && sadBlue == true){
    let counterImg = setInterval(timerImg, timeValue);
  
    function timerImg(){
      img.style.display = 'block'
      j++;
      img.style.opacity = j / 100;
      img.style.transform = `translateY(-${j / 10}px)`
      if(j >= 100){
        img.style.opacity = 1;
          clearInterval(counterImg);
      };
    };
  }else if(sadRed == false && sadYellow == false && sadBlue == false){
    sadRed = false;
    sadYellow = false;
    sadBlue = false;
    j = 0;
    img.style.display = 'none';
    img.style.opacity = '0';
  };
};

// Кнопка рестарт
resetButton.addEventListener('click', () =>{
  redButton.style.display = 'block';
  yellowButton.style.display = 'block';
  blueButton.style.display = 'block';
  redButton.style.opacity = '1';
  yellowButton.style.opacity = '1';
  blueButton.style.opacity = '1';
  sadRed = false;
  sadYellow = false;
  sadBlue = false;
  j = 0;
  img.style.display = 'none';
  img.style.opacity = '0';
});