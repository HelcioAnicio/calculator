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

  
  appendNumber (number) {
    if (this.actualDisplay.includes('.') && number === '.') return;

    this.actualDisplay = `${this.actualDisplay}${number.toString()}`
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


}

const calculator = new Calculator (
  previewDisplayText,
  actualDisplayText
)

allClean.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

numbers.forEach((number)=>{
  number.addEventListener('click', () => {
    calculator.appendNumber(number.innerText);
    calculator.updateDisplay()
  })
})

// numbers.forEach((number) => {
//   number.addEventListener('click', ()=> {
//     const digit = parseInt (number.innerHTML)
//     previewDisplay.innerHTML += digit;
//   })
// });



