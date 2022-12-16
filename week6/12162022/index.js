//document object model

    // getElementById ()
const banner = document.getElementById("banner");
// console.log(banner);
// console.dir(banner);

    // getElementByTagName ()
const paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs);

    // getElementsByClassName ()
const children = document.getElementsByClassName("kid");
// console.log(children);


    // querySelector ()
const bannerQuery = document.querySelector( "#banner" );
// console.log(bannerQuery);

    // querySelectorAll()
const childrenQuery = document.querySelectorAll( "div.kid" );
// console.log(childrenQuery);

    //
const heading = document.querySelector ("h1");
heading.textContent = "DOM";

const container = document.querySelector(".container")
    //element.innertext
// console.log( container.textContent); //kita lahat ng text
// console.log( container.innerText ); // kung ano lang ang nkadisplay
// container.innerText = "This is a new text"


    //innerHTML
// console.log( container.innerHTML );
container.innerHTML += "<h2>The new text</h2>";

    //Attributes
const link1 = document.querySelector("ul li a");

//element.getAttribute
// console.log(link1.getAttribute("href") );
//element.setAttribute(attributeName, Value);
link1.setAttribute("href", "https://google.com");
link1.setAttribute("class", "link");

const links = document.querySelectorAll("ul li a");
links[1].setAttribute("href", "https://yahoo.com");
links[2].setAttribute("href", "https://bing.com");

for(let link of links) {
    link.innerText = "I am a link!"
}

    //element style
const heading3 = document.querySelector("h3");
// console.dir(heading3);
heading3.style.fontSize = "48px"
heading3.style.color = "red";
heading3.style.fontFamily = "calibri"

// console.log( window.getComputedStyle(link1).color );

    //classes
const demo = document.getElementById("demo");
// demo.setAttribute("class", "green");
// demo.setAttribute("class", "border");
    //element.classList
console.log( demo.classList );

// demo.classList.add("green", "border") // tinanggal yung class na green border sa HTML
//or
demo.classList.add("green");
demo.classList.add("border");
    //remove method in classList
demo.classList.remove("green");

console.log(demo.classList.contains ("green"));
console.log(demo.classList.contains ("border"));

demo.classList.toggle("green");
demo.classList.toggle("green");
demo.classList.toggle("green");

// if (demo.classList.contains("green")) {
//     demo.classList.remove("green");
// }
// else {
//     demo.classList.add("green");
// }

    // traversing parent/child/siblings elements
const listItem = link1.parentElement;
// console.log(listItem);

const list = listItem.parentElement;
// console.log(list.children );

//     //return an elements
// console.log( list.previousElementSibling );
// console.log( list.nextElementSibling);

    //return as node
// console.log( list.previousSibling);
// console.log( list.nextSibling);


    // create a new element
const menu = document.querySelector("#menu");

const item = document.createElement("li"); //created a blank element(li) <li></li>
// console.dir(item);
item.innerText = "I am a new li element";
item.classList.add("green");

menu.appendChild(item);

const item2 = document.createElement("li");
const anchor = document.createElement( "a" );

anchor.append("Click Me!");
anchor.href = "https://bing.com";

item2.append(anchor);
menu.append(item2, 'another texts');

const item3 = document.createElement ("li");
item3.append("I will be the first child");
menu.prepend(item3);

const before = document.createElement("li");
const after = document.createElement("li");
before.append("I am before green");
after.append("I am after green");

item.insertAdjacentElement("beforebegin", before );
item.insertAdjacentElement("afterend", after);

    //remove child
    // parentElement.removeChild
const firstItem = document.querySelector( "#menu li" )
menu.removeChild(firstItem);

    // remove an Element
    // Element.remove()
demo.remove();
console.log(demo.parentElement);