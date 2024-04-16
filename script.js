const list = document.querySelector(".js-list");
const addBtn = document.querySelector(".js-addBtn");
const edit = document.querySelector(".fa-pencil");
const input = document.querySelector("input");

const addToList = () => {
  if (input.value === "") {
    return;
  } else {
    const li = document.createElement("li");

    li.classList.add("listElement");
    li.innerHTML = input.value;

    const createDiv = document.createElement("div");
    createDiv.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> 
      <i class="fa-solid fa-pencil"></i>`;
    createDiv.classList.add("icons");

    li.appendChild(createDiv);

    list.appendChild(li);
    input.value = "";
  }
};

addBtn.addEventListener("click", addToList);
