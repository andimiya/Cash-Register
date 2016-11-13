



var calculator = calculatorModule();
console.log(calculator.load(5));


document.addEventListener('click', function (){
  document.getElementById('display').innerHTML = calculator.load(5);
});

