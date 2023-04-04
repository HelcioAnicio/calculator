const numbers = document.querySelectorAll('.numero');
const operators = document.querySelectorAll('.operador')
const equal = document.querySelector('.equal')
const allClean = document.querySelector('.all-delete')
const clean = document.querySelector('.delete')
const previewDisplayText = document.querySelector('#valor-anterior')
const actualDisplayText = document.querySelector('#valor-actual')


class Calculator {
  constructor(previewDisplayText, actualDisplayText) {
    this.previewDisplayText = previewDisplayText;
    this.actualDisplayText = actualDisplayText;
    this.clear();
  }

  delete() {
    this.actualDisplay = this.actualDisplay.toString().slice(0, -1);
  }

  calculate () {
    let result;

    const _previewDisplay = parseFloat(this.previewDisplay);
    const _actualDisplay = parseFloat(this.actualDisplay);

    if (isNaN(_previewDisplay) || isNaN(_actualDisplay)) return;

    switch (this.operator) {
      case "+":
        result = _previewDisplay + _actualDisplay;
        break;

      case "-":
        result = _previewDisplay - _actualDisplay;
        break;

      case "/":
        result = _previewDisplay / _actualDisplay;
        break;

      case "*":
        result = _previewDisplay * _actualDisplay;
        break;

      default:
        break;
    }
    // if (equal) {
      
    // } else {
      
    // }
    this.actualDisplay = result;
    this.operator = undefined;
    this.previewDisplay = "";
  }
  
  chooseOperation(operator) {
    if (this.actualDisplay === "") return;

    if (this.previewDisplay !== "") {
      this.calculate();
    }
    this.operator = operator;
    this.previewDisplay = `${this.actualDisplay} ${this.operator}`;
    this.actualDisplay = "";
  }
  
  appendNumber (number) {
    if (this.actualDisplay.includes('.') && number === '.') return;

    this.actualDisplay = `${this.actualDisplay}${number.toString()}`;
  }

  clear() {
    this.previewDisplay = '';
    this.actualDisplay = '';
    this.operation = undefined;
  }

  updateDisplay() {
    this.previewDisplayText.innerText = this.previewDisplay;
    this.actualDisplayText.innerText = this.actualDisplay;
  }
};

const calculator = new Calculator (
  previewDisplayText,
  actualDisplayText
);

allClean.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

numbers.forEach((number)=>{
  number.addEventListener('click', () => {
    calculator.appendNumber(number.innerText);
    calculator.updateDisplay()
  })
});

operators.forEach((operator)=>{
  operator.addEventListener('click', () => {
    calculator.chooseOperation(operator.innerText);
    calculator.updateDisplay();
  })
});

clean.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

equal.addEventListener('click', () => {
  calculator.calculate();
  calculator.calculate();
  calculator.updateDisplay();
})