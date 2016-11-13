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
var addingArray = [];



button1.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(1);
  console.log(addingArray);

});

button2.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(2);
  console.log(addingArray);

});


button3.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(3);
  console.log(addingArray);

});

button4.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(4)
  console.log(addingArray);

});


button5.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(5)
  console.log(addingArray);

});


button6.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(6);
  console.log(addingArray);

});


button7.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(7);
  console.log(addingArray);

});

button8.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(8)
  console.log(addingArray);

});


button9.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(9)
  console.log(addingArray);

});

button0.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(0);
  console.log(addingArray);

});


button00.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(00);
  console.log(addingArray);

});

buttonDecimal.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(".")
  console.log(addingArray);

});


buttonMultiply.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push("*")
  console.log(addingArray);

});

buttonDivide.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push('/');
  console.log(addingArray);

});
buttonAdd.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push("+")
  console.log(addingArray);

});

buttonSubtract.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push("-")
  console.log(addingArray);

});

buttonEqual.addEventListener('click', function (){
  var totalForNow = eval(addingArray.join(''));
  document.getElementById('display').innerHTML = totalForNow;
});

