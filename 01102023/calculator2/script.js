// get all the buttons
const buttons = document.querySelectorAll('.button');

// get the display
const display = document.querySelector('.display');

// add click event listeners to all the buttons
buttons.forEach(button => {
  button.addEventListener('click', e => {
    // get the button's value
    const value = e.target.innerText;

    // check if the value is an operator
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      // update the display with the operator
      display.innerText = value;
    } else if (value === '=') {
      // calculate the result and update the display
      const result = eval(display.innerText);
      display.innerText = result;
    } else {
      // update the display with the number
      display.innerText += value;
    }
  });
});
