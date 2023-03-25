const NumberOfCategories = document.querySelectorAll(`.item`);
console.log(`Number Of Categories: ${NumberOfCategories.length}`);

for (const El of NumberOfCategories) {
  console.log(`Category: ${El.children[0].textContent}`);
  console.log(`Elements: ${El.children[1].children.length}`);
}
