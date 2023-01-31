const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

add.addEventListener("click", () => {
    result.value = parseFloat(num1.value) + parseFloat(num2.value);
});

subtract.addEventListener("click", () => {
    result.value = parseFloat(num1.value) - parseFloat(num2.value);
});

multiply.addEventListener("click", () => {
    result.value = parseFloat(num1.value) * parseFloat(num2.value);
});

divide.addEventListener("click", () => {
    result.value = parseFloat(num1.value) / parseFloat(num2.value);
});
