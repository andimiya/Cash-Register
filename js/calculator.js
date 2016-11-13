

function calculatorModule () {

  // Private variables
  let _memory = 0;
  let _total = 0;



  function load(x) {
    validation(x);
    _total = x;
    console.log(_total);
    return _total;
  }


  function getTotal(){
    return _total;
  }



  function add(x){

    validation(x);

    return _total += x;

  }

  function subtract(x){
    validation(x);
    return _total -= x;
  }

  function multiply(x){
    validation(x);
    return _total *= x;
  }

  function divide(x){
    validation(x);
    return _total /= x;
  }

  function recallMemory(){
    return _memory;
  }

  function saveMemory(){
    _memory = _total;
  }

  function clearMemory(){
    _memory = 0;
  }

  /**
   * Validation
   */
  function validation (x) {
    if (Number.isInteger(x)) {

    }
    else {
      return error();
    }
  }

  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
  };
}










