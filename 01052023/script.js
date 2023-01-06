const btnToggle = document.querySelector('#toggle');
const content = document.querySelector('#content');

btnToggle.addEventListener (
    "click",
    () => {
        /*
            1. check yung display property ng content div   
            2. pag display none, show the div (block)     
            3. elese, hide ung div

            = element.style.cssProperty
        */
            if (content.style.display === "none") {
                //show the content
                content.style.display = "block";
            } else {
                //hide the content
                content.style.display = "none";
            }
    }
)

const btnToggletext = document.querySelector('#toggleText')
const text = document.querySelector('#text')

btnToggletext.addEventListener(
    "click",
    () =>{
        text.classList.toggle('box');
    }
)