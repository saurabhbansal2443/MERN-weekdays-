let inputTag = document.querySelector('[type="number"]');
let btn = document.querySelector("button");
let cont = document.querySelector(".cont");

btn.addEventListener('click',function(){

    let n = inputTag.value

    inputTag.value = ""

    // console.log(n);

    cont.innerHTML= "";
    for(let i = 1 ; i<=n;i++){

    let mycirc = document.createElement("div");

    mycirc.classList.add("circle");

    cont.appendChild(mycirc);
    }

})