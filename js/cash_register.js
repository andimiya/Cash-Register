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


var cashReg = cashRegister();
console.log(cashReg.afterDeposit(10));

var calculator = calculatorModule();
var addingArray = [];



button2.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(2);
  // console.log(addingArray);
  // var numberString = addingArray.join('');
  // var numberTest = parseInt(numberString);

  // console.log(numberTest, 'numbertest');
  // // console.log(numberString);
  // console.log(calculator.add(numberTest),'added');
  console.log(addingArray);

});

button4.addEventListener('click', function (){
  document.getElementById('display').innerHTML = addingArray.push(4);

  console.log(addingArray);

});

button1.addEventListener('click', function (){
  var joinArray = addingArray.join('');
  document.getElementById('display').innerHTML = addingArray.add(joinArray);

  console.log(addingArray);

});