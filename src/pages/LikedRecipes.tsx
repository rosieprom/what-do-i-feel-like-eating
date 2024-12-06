/** @jsxImportSource theme-ui */
import { Heading, Grid, Paragraph } from "theme-ui";
import { useEffect, useState } from "react";
import { Meal } from "../api/meal-api";
import { getLikedMeals } from "../utils/localStorage";
import Card from "../components/Card";

const LikedRecipes = () => {
  const [likedMeals, setLikedMeals] = useState<Meal[]>([]);

  useEffect(() => {
    setLikedMeals(getLikedMeals());
  }, []);

  return (
    <main
      sx={{
        width: "100%",
        flex: "1 1 auto",
      }}
    >
      <Heading>Liked Recipes</Heading>
      <Paragraph>
        These are your favourite recipes that you have liked.
      </Paragraph>
      {likedMeals.length === 0 && (
        <Paragraph>
          You haven't liked any recipes yet. Go to the <a href="/">home page</a>{" "}
          and find a recipe to like.
        </Paragraph>
      )}

      <Grid gap={2} columns={[2, 4, 6]}>
        {likedMeals.map((meal) => (
          <Card
            key={meal.idMeal}
            imageSrc={meal.strMealThumb}
            imageAlt={meal.strMeal}
            cardText={meal.strMeal}
            onClick={() => (window.location.href = `/recipe/${meal.idMeal}`)}
          />
        ))}
      </Grid>
    </main>
  );
};

export default LikedRecipes;
