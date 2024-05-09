let btncont = document.querySelector(".buttonCont");

btncont.addEventListener("click",function(event){
     let ele = event.target

     console.log(ele.innerHTML);
})