// let box = document.querySelector(".box")

// box.style.color = "red"

// console.dir(box)

// let imgTag = document.getElementById("image");

// // console.dir(imgTag)

// imgTag.src = "./pic2.jpg"

// let h1tag = document.querySelector(".h1tag");

// h1tag.innerHTML = " I am changed through JS "

// console.dir(h1tag)

// let ul = document.querySelector("ul");

// let li = ul.querySelector("li");

// console.log(li)

// // console.log(ul)

//let imgTag = document.getElementById("image");

// console.log(imgTag.getAttribute("src"))

// imgTag.setAttribute("src","./pic2.jpg")

// let box = document.querySelector(".box");

// box.setAttribute("class" , "box bg-black");

// box.classList.add("bg-black")

// box.classList.remove("bg-black");

// // box.classList.add("bg-red");

// box.classList.toggle("bg-red")

// let h1Tag = document.createElement("h1");

// h1Tag.innerHTML = "I am h!";

// box.appendChild(h1Tag)


// function changeColor(){
//     box.classList.toggle("bg-black")
// }
// box.addEventListener("click",changeColor)

// let h1tag = document.querySelector("h1");

// h1tag.addEventListener("dblclick",function(event){

//     console.log(event)
//     // h1tag.innerHTML = "I am chnaged using EL "
// })

let imgTag = document.getElementById("image");

let flag =  true ;

imgTag.addEventListener("click",function(){

    if( flag == true ){
    imgTag.src = "./pic2.jpg"
    }else{
        imgTag.src = "./pic1.jpg"
    }

    flag = !flag;
  
})