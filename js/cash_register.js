



var calculator = calculatorModule();
console.log(calculator.load(5));

// display.innerHTML = calculator.load(5);

function testing (){
  console.log('test');

}

document.addEventListener('click', function (){
  document.getElementById('display').innerHTML = calculator.load(5);
});

// var displayTest = document.getElementById('display');
// displayTest.addEventListener('click', testing);
