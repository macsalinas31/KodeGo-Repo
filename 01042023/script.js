const btnRating = document.getElementById('btn-rating');
const output = document.querySelector('#output');

// btnRating.onclick = function() {
//     alert('Button was clicked!');
// }

btnRating.addEventListener(
    "click", 
    () => {
        const rating = document.getElementsByName('rating')
        //return collection of elements (node list)
        //[input, input, input, input, inpu] - same as array

        rating.forEach(
            (element) => {
                if (element.checked) {
                    output.innerText = element.value;
                    
                }
            }
        )
    }
);

const btnCount = document.querySelector('#btn-count');

const counter = () => {
    const h2 = document.getElementsByTagName('h2');
    const p = document.querySelectorAll('p');

    alert(`Total h2 elements; ${h2.length} \n Total p elements: ${p.length}`)
}
btnCount.addEventListener(
    "click",
    counter
);


const btnHello = document.getElementById("hello");
const btnGoodbye = document.getElementById("goodbye");
const btnLove = document.getElementById("love");


const greeting =(event) => {
    console.log(event.target.innerText);
}


btnHello.addEventListener(
    "click",
    (e) => {
        greeting(e)
    }
);

btnLove.addEventListener(
    "click",
    (e) => {
        greeting(e)
    }
);

btnGoodbye.addEventListener(
    "click",
    (e) => {
        greeting(e)
    }
);

const items = document.querySelectorAll(".item")
let list = [];
//get innterText of each item, then save to array


items.forEach(
    (item) => {
        list.push(item.innerText);
    }
)
console.log(list);