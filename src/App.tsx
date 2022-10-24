/** @jsxImportSource theme-ui */
import { Key, useState } from "react";
import "./App.css";
import { foodCategories } from "./utils/categories";
import { Meal } from "./utils/meal";
import { Button, Container, Grid } from "theme-ui";
import Card from "./components/Card";
import Selector from "./components/Selector";

function App() {
  const [category, setCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] = useState({});

  const handleRecipe = async function () {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      const transformedData = data.meals.map((meal: Meal, index: any) => {
        return {
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
        };
      });
      setMeals(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchRecipe = async function (mealId: string) {
    try {
      const recipeResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const recipeData = await recipeResponse.json();
      recipeData.meals.map((recipe: any) => (
        setRecipe(recipe)
      ))
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recipe)

  let content = <p>Select a type of meal</p>;

  if (meals.length > 0) {
    content = (
      <Grid gap={[2, 4]} columns={[2, 4, 8]}>
        {meals.map((m: Meal, id: any) => (
          <Card
            key={id}
            imageAlt={`${m.strMeal} Meal`}
            imageSrc={m.strMealThumb}
            cardText={m.strMeal}
            onClick={() => handleFetchRecipe(m.idMeal)}
          />
        ))}
      </Grid>
    );
  }

  return (
    <div className="App">
      <h1
        sx={{
          color: "primary",
          fontFamily: "heading",
        }}
      >
        Meal Planner App
      </h1>
      <h2>What do you feel like eating?</h2>
      <Container p={4} bg="muted">
        {foodCategories.map(
          (c: { name: string }, id: Key | null | undefined) => (
            <Selector
              id={id}
              name={c.name}
              value={c.name}
              isChecked={category === c.name}
              onChange={(e: any) => setCategory(e.target.value)}
            />
          )
        )}
        <Button type="submit" onClick={() => handleRecipe()}>
          Submit
        </Button>
      </Container>
      {content}
      {
        Object.values(recipe).map((v: any, index) => {
          return (
            <p key={index}>
              {v}
            </p>
          )
        })
      }
    </div>
  );
}

export default App;
