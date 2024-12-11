/** @jsxImportSource theme-ui */
import { Container, Heading, Grid, Paragraph, Flex } from "theme-ui";
import { useEffect, useState } from "react";
import { Meal } from "../api/meal-api";
import { getLikedMeals, deleteLikedMeal } from "../utils/localStorage";
import Card from "../components/Card";

const LikedRecipes = () => {
  const [likedMeals, setLikedMeals] = useState<Meal[]>([]);

  useEffect(() => {
    setLikedMeals(getLikedMeals());
  }, []);

  const handleDelete = (meal: Meal) => {
    deleteLikedMeal(meal);
    setLikedMeals((meals) => meals.filter((m) => m.idMeal !== meal.idMeal));
  };

  return (
    <Container
      sx={{
        alignItems: "stretch",
        flex: 1,
        marginBottom: 4,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          gap: 2,
          alignItems: "stretch",
          width: ["100%", "80%", "70%"],
          margin: "auto",
        }}
      >
        <Heading
          as="h1"
          sx={{
            color: "text",
          }}
        >
          Liked Recipes
        </Heading>

        {likedMeals.length === 0 ? (
          <Paragraph>
            You haven't liked any recipes yet. Go to the{" "}
            <a href="/">home page</a> and find a recipe to like.
          </Paragraph>
        ) : (
          <>
            <Paragraph
              sx={{
                color: "text",
                marginBottom: 3,
              }}
            >
              These are your favourite recipes. You've got good taste!
            </Paragraph>
            <Grid
              gap={[2]}
              columns={[1, 2, 3, 4, 5]}
              sx={{
                width: "100%",
                margin: "auto",
                justifyItems: ["center", "stretch"],
              }}
            >
              {likedMeals.map((meal) => (
                <Card
                  key={meal.idMeal}
                  imageSrc={meal.strMealThumb}
                  imageAlt={meal.strMeal}
                  cardText={meal.strMeal}
                  onClick={() =>
                    (window.location.href = `/recipe/${meal.idMeal}`)
                  }
                  onDelete={() => {
                    handleDelete(meal);
                  }}
                />
              ))}
            </Grid>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default LikedRecipes;
