/** @jsxImportSource theme-ui */
import { Container, Heading, Grid, Paragraph } from "theme-ui";
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
    <Container
      sx={{
        width: "100%",
        flex: "1 1 auto",
      }}
    >
      <Heading
        as="h1"
        sx={{
          color: "text",
          my: [2, 3],
        }}
      >
        Liked Recipes
      </Heading>
      <Paragraph
        sx={{
          color: "text",
          my: [2, 3],
        }}
      >
        These are your favourite recipes
      </Paragraph>
      {likedMeals.length === 0 && (
        <Paragraph>
          You haven't liked any recipes yet. Go to the <a href="/">home page</a>{" "}
          and find a recipe to like.
        </Paragraph>
      )}

      <Grid
        gap={[4, 3]}
        columns={[1, 4, 6]}
        sx={{
          width: "100%",
          justifyItems: "center",
        }}
      >
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
    </Container>
  );
};

export default LikedRecipes;
