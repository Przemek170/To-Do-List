const list = document.querySelector(".js-list");
const addBtn = document.querySelector(".js-addBtn");
const edit = document.querySelector(".pencil");
const input = document.querySelector("input");

const addToList = () => {
  if (input.value === "") {
    return;
  } else {
    const li = document.createElement("li");

    li.classList.add("listElement");
    li.innerHTML = input.value;

    const createDiv = document.createElement("div");
    createDiv.classList.add("icons");

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "xmark";
    deleteBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

    const editBtn = document.createElement("button");
    editBtn.className = "pencil";
    editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;

    li.appendChild(createDiv);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    list.appendChild(li);
    input.value = "";

    const myList = document.querySelectorAll("li");
    const myListArr = Array.from(myList);

    for (let i = 0; i < myListArr.length; i++) {
      function removeTask() {
        myList[i].remove();
        return;
      }
    }

    const editOn = () => {
      li.innerHTML = "";

      const editInput = document.createElement("input");

      const okContainer = document.createElement("div");
      okContainer.classList.add("okContainer");

      const okBtn = document.createElement("button");
      okBtn.classList.add("okBtn");
      okBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

      li.appendChild(editInput);
      li.appendChild(okContainer);

      okContainer.appendChild(okBtn);

      const editConfirm = () => {
        if (editInput.value === "") {
          return;
        } else {
          li.innerHTML = editInput.value;
          li.appendChild(createDiv);
          li.appendChild(deleteBtn);
          li.appendChild(editBtn);
        }
      };

      okBtn.addEventListener("click", editConfirm);
    };

    deleteBtn.addEventListener("click", removeTask);
    editBtn.addEventListener("click", editOn);
  }
};

addBtn.addEventListener("click", addToList);
