const loginForm = document.getElementById('login');

//event ng pagsubmit ng form - "submit"

loginForm.addEventListener(
    "submit",
    //event object
    (e) => {
        //ipprevenet na mangyare ang default behavior / macancel ung pag refresh ng page after mag-submit
        e.preventDefault();
        
        //para makuha ung value nf username at password
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');

        console.log(`Username is: ${username.value} \n Password is: ${password.value}`);
    }
)


            /*
            1. prevent default submission
            2. get the value of fruit and quantity
            3. create a new li element
            4. Set the text of the new li element to include fruit and quantity (eg. 99 apple)
            5. Append the new li element to the ul id=list
            6. reset input/set input value to empty
            */
            
   

    const form = document.querySelector("#fruits");
  const list = document.querySelector("#list");

  
  form.addEventListener(
    "submit", (event) => {
    // 1. Prevent the default action (i.e. submitting the form)
    event.preventDefault();

    // 2. get value of the fruit and quantity fields
    const fruit = form.elements.fruit.value;
    const quantity = form.elements.quantity.value;

    //3. Create a new li element
    const li = document.createElement("li");

    // 4. Set the text of the li element to include the fruit and quantity
    li.textContent = `${quantity} ${fruit}`;

    //5. Append the li element to the list
    list.appendChild(li);

    //6. Reset the input fields
    form.elements.fruit.value = "";
    form.elements.quantity.value = "";

    console.log(list)
  });