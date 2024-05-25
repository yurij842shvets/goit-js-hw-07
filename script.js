// const items = document.querySelectorAll('#categories .item')
// console.log(`У списку ${items.length} категорії.`);

// items.forEach(category => {
//     const titleCategory = category.querySelector('h1').textContent;
//     console.log('Категорія:', titleCategory);

//     const itemAmount = category.querySelectorAll('ul li')
//     console.log('Кількість елементів:', itemAmount);
// })


const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
const ingredientsItems = ingredients.map((ingredient) => {
    const listItem = document.createElement('li')
    listItem.textContent = ingredient;
    return listItem;
})
ingredientsList.append(...ingredientsItems)