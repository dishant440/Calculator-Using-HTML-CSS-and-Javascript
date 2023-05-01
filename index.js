let Calculation_Result = document.getElementById("result");

// function to clear the display .... 

function ClearDisplay(){
    Calculation_Result.value = ""; 
}

function InsertSymbol(symbol){
    Calculation_Result.value+=symbol;
}
function InsertNumber(num) {
    Calculation_Result.value += num;
  }

function DeleteLast(){
    Calculation_Result.value = Calculation_Result.value.slice(0,-1);
}
function Calculate() {
    try {
      // Evaluate the expression using JavaScript's built-in eval() function
      Calculation_Result.value = eval(Calculation_Result.value);
    } catch (error) {
      // If there is an error, show an alert with the message
      alert('Enter valid expression');
    }
  }
