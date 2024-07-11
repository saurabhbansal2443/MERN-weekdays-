let addCardBtn = document.querySelector(".addCards");
let taskAdder = document.querySelector(".taskAddContainer");
let textContainer = document.querySelector(".taskText");
let priorityColorTask = document.querySelector(".priorityColorTask");
let taskBoxes = document.querySelectorAll(".taskbox");

let border = "red";
let taskArray = [];

addCardBtn.addEventListener("click", () => {
  taskAdder.classList.toggle("noDisplay");
});

textContainer.addEventListener("keydown", (event) => {
  let taskText = event.target.value;
  let keyPressed = event.key;

  if (keyPressed == "Enter") {
    event.target.value = "";
    taskAdder.classList.toggle("noDisplay");
    //  console.log(taskText , border);
    let taskObj = {
      id: Date.now(),
      text: taskText,
      color: border,
    };

    taskArray.push(taskObj);

    console.log( taskArray)
  }
});

priorityColorTask.addEventListener("click", (event) => {
  let clickedBox = event.target;

  taskBoxes.forEach((taskBox) => {
    taskBox.classList.remove("colorBorder");
  });

  console.log(clickedBox.classList);
  if (clickedBox.classList[0] == "taskbox") {
    border = clickedBox.classList[2];
    clickedBox.classList.add("colorBorder");
  }
});
