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

display.addEventListener('click', function (){
  document.getElementById('display').innerHTML = calculator.load(5);
});





var cashReg = cashRegister();
console.log(cashReg.afterDeposit(10));