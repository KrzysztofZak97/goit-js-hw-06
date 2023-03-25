function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const delte = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = 30 + i * 10 + "px";
    newBox.style.height = 30 + i * 10 + "px";
    newBox.style.margin = 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    box.append(newBox);
  }
};

const destroyBoxes = () => {
  box.remove();
};

create.addEventListener("click", () => createBoxes(inputEl.value));
delte.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});
