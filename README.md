# Calculator
This website is a calculator, here you will be able to add, subtract, multiply and divide the math you need to do.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Building your project](#Building-your-project)


## Overview

### The challenge

The users should be able to:
- Add, subtract, multiply and divide the math. 
- See the display with numbers clicked.
- View the optimal layout depending on their device's screen size.

### Screenshot
- ![image](https://user-images.githubusercontent.com/117602073/234728074-7f0cfed1-4279-4aa2-8893-6f1f59129a9a.png)


### Links
- https://calculator-eight-inky.vercel.app/


## My process

### Built with
- Semantic HTML5
- Flexbox
- JavaScript
- Conditional
- Object orientation
- Metods
- Classes
- Events
- Ternary conditional


### What I learned
How create metods, classes and constructor. For the first time i used object orientation in my projects.
```JS
class Calculator {
  constructor(previewDisplayText, actualDisplayText) {
    this.previewDisplayText = previewDisplayText;
    this.actualDisplayText = actualDisplayText;
    this.clear();
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
```

### Continued development
I will developer my projets using OOP to better knowledge and practice.


### Useful resources

This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/

## Author
- Linkedin - https://www.linkedin.com/in/helcio-anicio/ 
- Vercel - https://vercel.com/helcioanicio

<!--
## Acknowledgments
 -->