const searchbox = document.querySelector(".searchbox");
const searchbtn = document.querySelector(".searchbtn");
const recipecontainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");

recipecontainer.innerHTML = "";
const fetchrecipes = async (query) => {
  recipecontainer.innerHTML = "<h2>Fetching recipes...</h2>";
  try {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const response = await data.json();
    recipecontainer.innerHTML = "";
    response.meals.forEach((meal) => {
      const recipediv = document.createElement("div");
      recipediv.classList.add("recipe");
      recipediv.innerHTML = ` <img src="${meal.strMealThumb}">
       <h3>${meal.strMeal}</h3>
       <P><span>${meal.strArea} Dish</span></P>
       <P>Belongs to <span>${meal.strCategory}</span> Category</P>
       
       `;
      const button = document.createElement("button");
      button.textContent = "View Recipe";
      recipediv.appendChild(button);
      //adding eventlistener to recipe button
      button.addEventListener("click", () => {
        openRecipepopup(meal);
      });

      recipecontainer.appendChild(recipediv);
    });
  } catch (error) {
    recipecontainer.innerHTML = "<h2>Error in Fetching recipes 💀</h2>";
  }
};
// function to fetch ingeredents and measurements
const fetchingeredients = (meal) => {
  let ingredentslist = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingredentslist += `<li>${measure} ${ingredient}</li>`;
    } else {
      break;
    }
  }
  return ingredentslist;
};

const openRecipepopup = (meal) => {
  recipeDetailsContent.innerHTML = `
    <h2 class="recipename">${meal.strMeal}</h2>
    <h3>Ingeredents:</h3>
    <ul class="ingredientlist">${fetchingeredients(meal)}</ul>
    <div class = "recipeInstruction">
        <h3> Instruction: </h3>
        <P >${meal.strInstructions}</p>
    </div>
    `;
  recipeDetailsContent.style.background= `url(${meal.strMealThumb})`;
  recipeDetailsContent.parentElement.style.display = "block";
};

recipeCloseBtn.addEventListener("click", () => {
  recipeDetailsContent.parentElement.style.display = "none";
});

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchinput = searchbox.value.trim();
  if (!searchinput) {
    recipecontainer.innerHTML = `<h2>Type the meal in the search box</h2>`;
    return;
  }
  fetchrecipes(searchinput);
});
