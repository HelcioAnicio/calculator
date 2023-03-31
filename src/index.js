const btns = document.querySelectorAll('.numero');
const operators = document.querySelectorAll('.operador')
const previewDisplay = document.querySelector('#valor-anterior')


// function soma () {
btns.forEach((btn) => {
  btn.addEventListener('click', ()=> {
    const digit = parseInt (btn.innerHTML)
    previewDisplay.innerHTML += digit;
  })
});


operators.forEach((operator) => {
  function soma () {
    // switch (operator) {
    //   // case :
    //     // 
    //     break;
    
    //   default:
    //     break;
    // }
  
  }
  operator.addEventListener('click', ()=> {
    const calc = operator.innerHTML
    
    previewDisplay.innerHTML += ` ${calc}`;
  })
});


