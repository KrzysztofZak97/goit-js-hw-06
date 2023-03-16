const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector(`#ingredients`);

ingredients.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  ul.append(li);
  console.log(li);
});
