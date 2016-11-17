var keyType = {
  //the category of key pressed.
  number: 1,
  decimal: 2,
  operationSymbol: 3,
  clearEntry: 4,
  equal: 5
};

var partOfOperation = {
  //which part of the math we are currently in
  initial: 1,
  //so this stands for when we open the calculator
  number1: 2,
  //this is if we are putting in numbers
  decimal1: 3,
  //this is if we use a decimal (0.) as the first input
  operation: 4,
  //this is when we put in an operator!
  number2: 5,
  decimal2: 6,
  equal: 7
  //this is for when we use equal
};




var theCalculator = (function(){
  // var keyType = {
  //   //the category of key pressed.
  //   number: 1,
  //   decimal: 2,
  //   operationSymbol: 3,
  //   clearEntry: 4,
  //   equal: 5
  // };

  // var partOfOperation = {
  //   //which part of the math we are currently in
  //   initial: 1,
  //   //so this stands for when we open the calculator
  //   number1: 2,
  //   //this is if we are putting in numbers
  //   decimal1: 3,
  //   //this is if we use a decimal (0.) as the first input
  //   operation: 4,
  //   //this is when we put in an operator!
  //   number2: 5,
  //   decimal2: 6,
  //   equal: 7
  //   //this is for when we use equal
  // };

  function displayHtml(whatGoesIntoDisplay){
    document.getElementById('inputDisplay').innerHTML = whatGoesIntoDisplay;
  }

  function modifyDisplay(inputValue){
    calc.display = inputValue;
    displayHtml(calc.display);
  }

  function displayAdd(inputValue){
    calc.display += inputValue;
    displayHtml(calc.display);
  }

  function solve(varOne, varTwo){
    if(calc.operation === '+'){
      calc.display = parseInt(varOne) + parseInt(varTwo);
    }
    if(calc.operation === '-'){
      calc.display = parseInt(varOne) - parseInt(varTwo);
    }
    if(calc.operation === '*'){
      calc.display = parseInt(varOne) * parseInt(varTwo);
    }
    if(calc.operation === '/'){
      calc.display = parseInt(varOne) / parseInt(varTwo);
    }
  }

  var calc = {
    //these key/value pairs are used to hold values even when we move on. They remember what the first number was, what operator we put, etc.
    currentPartOfOperation: partOfOperation.initial,
    //assigns the calculator to the initial setting of operation upon load
    operation: '',
    //keeps operater value as value
    display: '',
    //holds the display as value
    firstNumber: '',
    //holds the first number
    secondNumber: '',
    //holds the second number
    //calc.action makes 
    action: function doStuff(typeOfKeyPressed, key){
      switch (this.currentPartOfOperation){
      //checking what part of the operation we're on and only taking in specific types of input. This avoids repeated operators/decimals/operators first, etc.
        case partOfOperation.initial:
          if(typeOfKeyPressed === keyType.number){
            //if the key we pressed is a number...
            modifyDisplay(key);
            this.currentPartOfOperation = partOfOperation.number1;
          }
          if(typeOfKeyPressed === keyType.decimal){
            //if they key we pressed is a decimal we change the display to 0. since it is the beginning
            modifyDisplay('0.');
            //and we change the currentPartOfOperation to decimal so that we dont add anymore decimals
            this.currentPartOfOperation = partOfOperation.decimal1;
          }
          break;

        case partOfOperation.number1:
          if(typeOfKeyPressed === keyType.number){
            displayAdd(key);
            this.currentPartOfOperation = partOfOperation.number1;
          }
          if(typeOfKeyPressed === keyType.operationSymbol){
            //so if we hit an operation, we change the calc.operation to whatever operator the key was so that we have it stored
            //in this case, key could be +, -, *, /
            calc.operation = key;
            //and because we entered an operator.. we want to store the number we had displayeed as calc.firstNumber
            calc.firstNumber = calc.display;
            //and change the currentPartOfOperation to being operating/operation
            this.currentPartOfOperation = partOfOperation.operation;
          }
          if(typeOfKeyPressed === keyType.decimal){
            displayAdd(key);
            this.currentPartOfOperation = partOfOperation.decimal1;
          }
          if(typeOfKeyPressed === keyType.clearEntry){
            //if we clear entry
            //we change display to 0 again and go back to the partOfOperation.initial aka the beginning/onload
            modifyDisplay("0");
            this.currentPartOfOperation = partOfOperation.initial;
          }
          break;

        case partOfOperation.decimal1:
          if(typeOfKeyPressed === keyType.number){
            displayAdd(key);
          }
          if(typeOfKeyPressed === keyType.operationSymbol){
            this.operation = key;
            this.firstNumber = this.display;
            this.currentPartOfOperation = partOfOperation.operation;
          }
          if(typeOfKeyPressed === keyType.clearEntry){
            modifyDisplay("0");
            this.currentPartOfOperation = partOfOperation.initial;
          }
          break;

        case partOfOperation.operation:
          if(typeOfKeyPressed === keyType.number){
            modifyDisplay(key);
            this.currentPartOfOperation = partOfOperation.number2;
          }
          if(typeOfKeyPressed === keyType.decimal){
            modifyDisplay("0.");
            this.currentPartOfOperation = partOfOperation.decimal2;
          }
          break;

        case partOfOperation.number2:
          if(typeOfKeyPressed === keyType.number){
            displayAdd(key);
          }
          if(typeOfKeyPressed === keyType.decimal){
            displayAdd(key);
            this.currentPartOfOperation = partOfOperation.decimal2;
          }
          if(typeOfKeyPressed === keyType.equal){
            calc.secondNumber = calc.display;
            solve(calc.firstNumber, calc.display);
            console.log(calc.display);
            modifyDisplay(calc.display);
            //FIGURE THIS STUFF OUT RIGHT HERE SO THAT EQUAL CHANGES THE DISPLAY
            this.currentPartOfOperation = partOfOperation.equal;
          }
          if(typeOfKeyPressed === keyType.operationSymbol){
            this.secondNumber = this.display;
            solve(calc.firstNumber, calc.display);
            modifyDisplay(calc.display);
            this.operation = key;
            calc.firstNumber = calc.display;
            this.currentPartOfOperation = partOfOperation.operation;
          }
          break;

        case partOfOperation.decimal2:
          if(typeOfKeyPressed === keyType.number){
            displayAdd(key);
          }
          if(typeOfKeyPressed === keyType.operationSymbol){
            solve(calc.acc1, calc.display);
            modifyDisplay(calc.display);
            this.operation = key;
            this.firstNumber = this.display;
          }
          if(typeOfKeyPressed === keyType.clearEntry){
            modifyDisplay("0");
            this.currentPartOfOperation = partOfOperation.initial;
          }
          if(typeOfKeyPressed === keyType.operationSymbol){
            solve(calc.acc1, calc.display);
            modifyDisplay(calc.display);
            this.operation = key;
            this.firstNumber = this.display;
          }
          break;



      }
    }
  };
  return calc;
});



var completeCalculator = theCalculator();
button1.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '1');
});
button2.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '2');
});
button3.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '3');
});
button4.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '4');
});
button5.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '5');
});
button6.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '6');
});
button7.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '7');
});
button8.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '8');
});
button9.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '9');
});
button0.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '0');
});
button00.addEventListener('click', function(){
  completeCalculator.action(keyType.number, '00');
});
buttonDecimal.addEventListener('click', function(){
  completeCalculator.action(keyType.decimal, '.');
});
buttonAdd.addEventListener('click', function(){
  completeCalculator.action(keyType.operationSymbol, '+');
});
buttonSubtract.addEventListener('click', function(){
  completeCalculator.action(keyType.operationSymbol, '-');
});
buttonMultiply.addEventListener('click', function(){
  completeCalculator.action(keyType.operationSymbol, '*');
});
buttonDivide.addEventListener('click', function(){
  completeCalculator.action(keyType.operationSymbol, '/');
});
buttonEqual.addEventListener('click', function(){
  completeCalculator.action(keyType.equal, '=');
});
//completeCalculator.action(keyType.number, 1)