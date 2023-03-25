let CurrentValue = document.querySelector("#value");
const addButton = document.querySelector(`[data-action="increment"]`);
const remButton = document.querySelector(`[data-action="decrement"]`);
let value = 0;
CurrentValue.innerText = value;
const addClick = () => {
  value = value + 1;
  CurrentValue.innerText = value;
};

const remClick = () => {
  value = value - 1;
  CurrentValue.innerText = value;
};

addButton.addEventListener("click", addClick);

remButton.addEventListener("click", remClick);
