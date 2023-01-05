const btnToggle = document.querySelector('#toggle');
const content = document.querySelector('#content');

btnToggle.addEventListener (
    "click",
    () => {
        /*
            1. check yung display property ng content div   
            2. pag dispalay none, show the div (block)     
            3. elese, hide ung div
        */
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
    }
)