let inputTag = document.querySelector("#inputtag");
let addBtn = document.querySelector("#addbtn");
let cont = document.querySelector(".cont");
// let icon = document.querySelector('[height="30px"]') // this is wrong way 

// console.log(icon)

addBtn.addEventListener("click",function(){

    let task = inputTag.value ;

    if(task == "") return ;

    inputTag.value = "";

    let todoEle = document.createElement("div");

    todoEle.classList.add("todo");

    todoEle.innerHTML = `<p> ${task}</p>
    <svg height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>`

    let delIcon = todoEle.querySelector('[height="30px"]')

    // console.log(delIcon)

    delIcon.addEventListener("click",function(){
        cont.removeChild(todoEle);
    })

    cont.appendChild(todoEle);

})