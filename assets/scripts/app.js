const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  // Seperating User input for efficiency
  return parseInt(userInput.value);
}

// Output writer for Result & Description

function outputWriter(initResult, operator, calcNumb) {
  const calcDescription = `${initResult} ${operator} ${calcNumb}`;
  outputResult(currentResult, calcDescription);
}


// Write to log function

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult) {
    
    // vv Object vv
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult, 
  };
   // Action Entries
        logEntries.push(logEntry);
        console.log(logEntry.operation);
        console.log(logEntries);
        }

// Calculator Functions

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  outputWriter(initialResult, "+", enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  outputWriter(initialResult, "-", enteredNumber);
  logEntries.push(enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  outputWriter(initialResult, "*", enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  outputWriter(initialResult, "/", enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

// Button functions

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
