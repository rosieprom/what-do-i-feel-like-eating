/** @jsxImportSource theme-ui */
import { Button, Container, Grid, Heading, Paragraph, Text } from "theme-ui";
import { useCallback, useState } from "react";
import { getRandomMeal, Meal } from "../api/meal-api";
import { saveLikedMeal } from "../utils/localStorage";
import MealDisplay from "../components/MealSelector";

const Home = () => {
  const [dinner, setDinner] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const decideDinner = useCallback(async () => {
    setConfirmation(false);
    setLoading(true);
    try {
      const meal = await getRandomMeal();
      setDinner(meal);
    } catch (error) {
      console.error("Failed to fetch meal:", error);
    }
    setLoading(false);
  }, []);

  const handleLike = useCallback(() => {
    if (dinner) {
      saveLikedMeal(dinner);
      setConfirmation(true);
      decideDinner();
    }
  }, [dinner, decideDinner]);

  const handleDislike = useCallback(() => {
    decideDinner();
  }, [decideDinner]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flex: "1 1 auto",
        margin: [2, 4],
      }}
    >
      <Grid
        sx={{
          gap: 3,
          alignItems: "center",
          justifyItems: "center",
          padding: 3,
        }}
      >
        <Heading
          as="h1"
          sx={{
            color: "text",
            textAlign: "center",
          }}
        >
          What do I feel like eating?
        </Heading>
        {confirmation && (
          <Text
            sx={{
              color: "secondary",
            }}
          >
            Successfully added to Liked Recipes! 🎉
          </Text>
        )}
        <Button onClick={decideDinner} disabled={loading}>
          {loading ? "Loading..." : "Decide for me!"}
        </Button>
      </Grid>
      {dinner ? (
        <MealDisplay
          meal={dinner}
          onLike={handleLike}
          onDislike={handleDislike}
          loading={loading}
        />
      ) : (
        <Paragraph
          sx={{
            color: "primary",
            fontSize: 3,
            fontWeight: "medium",
          }}
        >
          Click the button to get some meal suggestions
        </Paragraph>
      )}
    </Container>
  );
};

export default Home;
