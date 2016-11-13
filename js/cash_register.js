function cashRegister(){
  var balance = 0;

  function deposit(x){
    balance += x;
    return balance;
  }

  function withdraw(x){
    balance -= x;
    return balance;
  }

  function clear(){
    balance = 0;
    return balance;
  }

  return{
    afterDeposit: deposit,
    afterWithdraw: withdraw
  };
}



Memory  = "0";      // initialise memory variable
Current = "0";      //   and value of Display ("current" value)
Operation = 0;      // Records code for eg * / etc.

console.log(5*5,'25');


var calculator = calculatorModule();
var addingArray = [];



button2.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(2);
  console.log(addingArray);

});

button4.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(4);

  console.log(addingArray);

});

button1.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push('+');

  console.log(addingArray);

});

button5.addEventListener('click', function (){
  document.getElementById('display').innerHTML = eval(addingArray.join(' '));
});

// console.log(eval(addingArray.join(' ')));


// myArray = ["2", "+", "4", "-","1"]; // 5

// eval(myArray[0] + myArray[1] + myArray[2]);

// console.log(eval(myArray.join(' ')));




