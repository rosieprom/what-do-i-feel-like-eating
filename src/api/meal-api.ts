export interface Meal {
  /**
   * The ID of the meal.
   */
  idMeal: string;
  /**
   * The name of the meal.
   */
  strMeal: string;
  /**
   * The alternate drink of the meal.
   */
  strDrinkAlternate?: string;
  /**
   * The category of the meal.
   */
  strCategory: string;
  /**
   * The nationality of the meal.
   */
  strArea: string;
  /**
   * The instructions to prepare the meal.
   */
  strInstructions: string;
  /**
   * The image URL of the meal.
   */
  strMealThumb: string;
  /**
   * The tags of the meal.
   */
  strTags: string;
  /**
   * The video URL of the meal.
   */
  strYoutube: string;
  /**
   * The ingredients
   */
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  /**
   * The measurements of the ingredients.
   */
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified?: string;
}

export async function getRandomMeal(): Promise<Meal> {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  return data.meals[0];
}

export async function getMealById(id: string): Promise<Meal> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals[0];
}
