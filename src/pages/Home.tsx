/** @jsxImportSource theme-ui */
import {
  Button,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Paragraph,
  Image,
  Text,
  Spinner,
  Badge,
} from "theme-ui";
import { useState, useEffect } from "react";
import { getRandomMeal, Meal } from "../api/meal-api";
import { saveLikedMeal } from "../utils/localStorage";

const Home = () => {
  const [dinner, setDinner] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const decideDinner = async () => {
    setConfirmation(false);
    setLoading(true);
    try {
      const meal = await getRandomMeal();
      setDinner(meal);
    } catch (error) {
      console.error("Failed to fetch meal:", error);
    }
    setLoading(false);
  };

  const handleLike = () => {
    if (dinner) {
      saveLikedMeal(dinner);
      setConfirmation(true);
    }
  };

  const handleDislike = () => {
    decideDinner();
  };

  useEffect(() => {
    decideDinner();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
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
            color: "highlight",
          }}
        >
          Dinner Time
        </Heading>
        <Button onClick={decideDinner} disabled={loading}>
          {loading ? "Loading..." : "Decide Dinner"}
        </Button>
      </Grid>

      {loading ? (
        <Spinner />
      ) : dinner ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            padding: 3,
            borderRadius: 4,
            maxWidth: 800,
          }}
        >
          <Image
            src={dinner.strMealThumb}
            alt={dinner.strMeal}
            width={300}
            height={200}
            className="rounded-md shadow-md"
          />
          <div
            sx={{
              mx: "auto",
              px: 3,
              py: 4,
            }}
          >
            <Heading
              as="h2"
              sx={{
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              {dinner.strMeal}
            </Heading>
            <Badge>{dinner.strMeal}</Badge>
            <Badge variant="muted">{dinner.strArea}</Badge>
            <Paragraph
              sx={{
                marginBottom: 2,
              }}
            >
              Instructions:
            </Paragraph>
            <Paragraph>{dinner.strInstructions}</Paragraph>
          </div>
          {confirmation && (
            <Text
              sx={{
                color: "secondary",
              }}
            >
              Liked! 🎉
            </Text>
          )}
          <Flex
            sx={{
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button onClick={handleLike}>Like</Button>
            <Button onClick={handleDislike} disabled={confirmation}>
              Dislike
            </Button>
          </Flex>
        </Box>
      ) : (
        <Paragraph>Click the button to get some dinner suggestions!</Paragraph>
      )}
    </Container>
  );
};

export default Home;
