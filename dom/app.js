// let username = prompt("Enter your name ");

// alert(username);
// console.log(username);


// document.write("<h1> Hello world </h1>");

const div1 = document.getElementById("divOne");
div1.innerHTML = "<h2>hello</h2>";

const p = document.createElement("p");
p.textContent = "sdmfkjnmsdnc,sdmcdsc";
div1.appendChild(p);


// const p1 = document.getElementById("pOne");
// p1.textContent = "Welcome";


p.style.backgroundColor = "rgba(255,50,20)";

const img = document.createElement("img");
div1.appendChild(img);

img.src = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
img.width = 200;
img.height = 200;

const divs = document.getElementsByTagName("div");
// console.log(divs);


///////////////////////////////////////////////////////////////////

const form = document.getElementById("form");
const p2 = document.getElementById("username");
const header = document.getElementsByTagName("header")[0];
// form.addEventListener("submit",function(e){
//     code 
// })

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let name = event.target.name.value;
    let age = event.target.age.value;

    p2.textContent = name;

    const p3 = document.createElement("p");
    p3.textContent = age;
    header.appendChild(p3);



    console.log(name);
})


///////////////////////////////////////////////////



const pForm = document.getElementById("Pform");
const ul = document.createElement("ul");
const divP = document.getElementById("allProducts");
divP.appendChild(ul);

function handelSubmit (event){
    event.preventDefault();
    let product = event.target.pro.value;
    let price = event.target.price.value;

    console.log(product,price);
     
    let li = document.createElement("li");
    li.textContent = `${product} : ${price} $`;
    ul.appendChild(li);
    console.log(li);

}

pForm.addEventListener("submit",handelSubmit);
