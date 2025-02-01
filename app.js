const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addItem() {
  const content = inputEl.value;
  const newItem = document.createElement("li");
  newItem.textContent = content;
  listEl.appendChild(newItem);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addItem);
