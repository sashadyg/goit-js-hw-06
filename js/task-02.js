const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const arrayOfIngredients = []

ingredients.forEach(ingredient => {
  const addedIngredient = document.createElement('li')
  addedIngredient.textContent = ingredient
  addedIngredient.classList.add = 'item'

  arrayOfIngredients.push(addedIngredient)
})

ingredientsRef.append(...arrayOfIngredients)