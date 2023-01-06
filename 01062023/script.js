const btnRadio = document.querySelector('#btnRadio')

btnRadio.addEventListener(
    "click",
    () => {
        const checked = document.querySelector("input[name='radbtn']:checked");
        alert(checked.value)
    } 
);

const radBtn = document.querySelectorAll("input[name='radbtn']");

btnRadio.addEventListener (
    "clcik",
    () => {

    }
)