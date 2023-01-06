const btnRadio = document.querySelector('#btnRadio')

btnRadio.addEventListener(
    "click",
    () => {
        //<input type="radio" name="radbtn" id="radbtn1" value="radbtn1" checked> 
        const checked = document.querySelector("input[name='radbtn']:checked");
        alert(checked.value)
    } 
);

const radBtn = document.querySelectorAll("input[name='radbtn']");
    // [input, input, input] = kailangan i-loop 

    //each element dapat lagyan ng eventlistener = (nodeList)
    //nodeList = parang array na may forEach

radBtn.forEach(
    //el = element
    //e = event
    (el) => {
         el.addEventListener(
            'change',
            (e) => {
                //e.target.value
                alert(e.target.value)
            }
        );
    }
);

const firstName = document.querySelector('#firstName');
const output = document.querySelector('#output');

firstName.addEventListener(
    //matrigger pag may changes - change
    'change',
    (e) => {
        output.innerText = `Hello, ${e.target.value}!`;
    }
);

const nickname = document.getElementById('nickname');
const nicknameOutput = document.getElementById('nicknameOutput');
let timer;

nickname.addEventListener(
    //input event - pag nagtype si user dun sa loob ng input
    'input',
    (e) => {
     //dbounce / debouncing - concept na kapag merong fx na gagawin at paulit ulit na nagyayare kahit hindi dapat, ito yung mag preprevent na hindi mangyare yun
     clearTimeout(timer); 
    
        
    timer = setTimeout(
            //1. required callback function
            //2. mag lagay ng delay in milliseconds
            () => {
                nicknameOutput.innerText = `Welcome to${e.target.value}!`;
                console.log(e.target.value);
            },
            1000
        );  
    }
);

const checkAll = document.querySelector('#checkAll');
const checkboxes = document.querySelectorAll("input[name='check']");
//[input, input, input, input]

checkAll.addEventListener(
    'click', 
    (e) => {
  const checked = e.target.checked;

  checkboxes.forEach(
    (checkbox) => {``
    checkbox.checked = checked;
  });
});

/*
1.pag may naka-check ma box at pinindot ung check all button, ma-check lahat ang natitirang boxes
2.pag nacheck naman lahat at pinindot ung check/uncheck all box ay ma-uncheck lahat
*/

/*
1. if 1 or more checkboxes is unchecked, check all
2. else, uncheck all
*/

const btnToggle = document.querySelector('#toggle');
const colors = document.querySelectorAll('input[name="colors"]');
// [input, input, input, input]

btnToggle.addEventListener(
    "click",
    () => {
        let allChecked = true;
        colors.forEach(
            (color) => {
                if( !color.checked ) {
                    allChecked = false;
                }
            }
        );
        if( !allChecked ) {
            // check all checkboxes
            colors.forEach(
                (color) => {
                    color.checked = true
                }
            )
        } 
        else {
            // uncheck all checkboxes
            colors.forEach( color => color.checked = false );
        }
    }
);
