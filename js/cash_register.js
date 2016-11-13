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



button2.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(2);
  console.log(addingArray);

});

button4.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(4)
  console.log(addingArray);

});

button1.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push('+');
  console.log(addingArray);

});

button5.addEventListener('click', function (){
  var totalForNow = eval(addingArray.join(' '));
  document.getElementById('display').innerHTML = totalForNow;
});
