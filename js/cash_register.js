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




var calculator = calculatorModule();
var cashReg = cashRegister();
var addingArray = [];
var balance = 0;


clear.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.length = 0;
  console.log(addingArray);
});

button1.addEventListener('click', function (){
  addingArray.push(1);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button2.addEventListener('click', function (){
  addingArray.push(2);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button3.addEventListener('click', function (){
  addingArray.push(3);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button4.addEventListener('click', function (){
  addingArray.push(4);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button5.addEventListener('click', function (){
  addingArray.push(5);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button6.addEventListener('click', function (){
  addingArray.push(6);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button7.addEventListener('click', function (){
  addingArray.push(7);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button8.addEventListener('click', function (){
  addingArray.push(8);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button9.addEventListener('click', function (){
  addingArray.push(9);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button0.addEventListener('click', function (){
  addingArray.push(0);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

button00.addEventListener('click', function (){
  addingArray.push(00);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

buttonDecimal.addEventListener('click', function (){
  addingArray.push(".");
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
});

buttonMultiply.addEventListener('click', function (){
  if(addingArray[(addingArray.length-1)] !== '+' && addingArray[(addingArray.length-1)] !== '-' && addingArray[(addingArray.length-1)] !== '/' && addingArray[(addingArray.length-1)] !== '*'){
  addingArray.push("*");
  console.log(addingArray);
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
  } else {
    addingArray.splice(addingArray.length - 1, 1, '*');
    console.log(addingArray);
    document.getElementById('display').innerHTML = addingArray.join('');
    console.log(addingArray);
  }
});

buttonDivide.addEventListener('click', function (){
  if(addingArray[(addingArray.length-1)] !== '+' && addingArray[(addingArray.length-1)] !== '-' && addingArray[(addingArray.length-1)] !== '/' && addingArray[(addingArray.length-1)] !== '*'){
  addingArray.push("/");
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
  } else {
    addingArray.splice(addingArray.length - 1, 1, '/');
    console.log(addingArray);
    document.getElementById('display').innerHTML = addingArray.join('');
    console.log(addingArray);
  }
});

buttonAdd.addEventListener('click', function (){
  if(addingArray[(addingArray.length-1)] !== '+' && addingArray[(addingArray.length-1)] !== '-' && addingArray[(addingArray.length-1)] !== '/' && addingArray[(addingArray.length-1)] !== '*'){
  addingArray.push("+");
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
  }  else {
    addingArray.splice(addingArray.length - 1, 1, '+');
    console.log(addingArray);
    document.getElementById('display').innerHTML = addingArray.join('');
    console.log(addingArray);
  }
});

buttonSubtract.addEventListener('click', function (){
  if(addingArray[(addingArray.length-1)] !== '+' && addingArray[(addingArray.length-1)] !== '-' && addingArray[(addingArray.length-1)] !== '/' && addingArray[(addingArray.length-1)] !== '*'){
  addingArray.push("-");
  document.getElementById('display').innerHTML = addingArray.join('');
  console.log(addingArray);
  }  else {
    addingArray.splice(addingArray.length - 1, 1, '-');
    console.log(addingArray);
    document.getElementById('display').innerHTML = addingArray.join('');
    console.log(addingArray);
  }
});

buttonEqual.addEventListener('click', function (){
  var totalForNow = eval(addingArray.join(''));
  document.getElementById('display').innerHTML = totalForNow;
  return totalForNow;
});

