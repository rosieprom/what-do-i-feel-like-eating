export interface Meal {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
}

export async function getRandomMeal(): Promise<Meal> {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  return data.meals[0];
}
