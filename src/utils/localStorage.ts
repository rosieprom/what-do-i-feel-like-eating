import { Meal } from "../api/meal-api";

export const saveLikedMeal = (meal: Meal) => {
  const likedMeals = getLikedMeals();
  if (!likedMeals.some((m) => m.idMeal === meal.idMeal)) {
    likedMeals.push(meal);
    localStorage.setItem("likedMeals", JSON.stringify(likedMeals));
  }
};

export const getLikedMeals = (): Meal[] => {
  const meals = localStorage.getItem("likedMeals");
  return meals ? JSON.parse(meals) : [];
};
