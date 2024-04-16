const list = document.querySelector(".js-list");
const addBtn = document.querySelector(".js-addBtn");
const edit = document.querySelector(".fa-pencil");
const input = document.querySelector("input");

const li = document.createElement("li");

let listElements = [];

li.classList.add("listElement");

const createDiv = document.createElement("div");
createDiv.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> 
      <i class="fa-solid fa-pencil"></i>`;
createDiv.classList.add("icons");

li.appendChild(createDiv);

const addToList = () => {
  if (input.value === "") {
    return;
  } else {
    list.appendChild(li);
    li.innerHTML = input.value;
    input.value = "";

    const xmarks = document.querySelectorAll(".fa-circle-xmark");
    const xmarksArr = Array.from(xmarks);

    xmarksArr.forEach((x) => {
      x.addEventListener(
        "click",
        (removeTask = () => {
          console.log(listElements);
        })
      );
    });
  }
};

addBtn.addEventListener("click", addToList);
