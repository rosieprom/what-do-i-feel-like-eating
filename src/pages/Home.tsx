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
      setLoading(true);
      setTimeout(() => {
        setConfirmation(false);
        decideDinner();
        setLoading(false);
      }, 1000); // 2 seconds delay
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
          }}
        >
          Dinner Time
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
            border: "1px solid",
            borderColor: "gray",
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Heading
              as="h2"
              sx={{
                marginTop: 4,
                marginBottom: 2,
                textAlign: "center",
                color: "text",
              }}
            >
              {dinner.strMeal}
            </Heading>
            <Flex>
              <Badge variant="purple">{dinner.strCategory}</Badge>
              <Badge variant="pink">{dinner.strArea}</Badge>
              {dinner.strTags &&
                dinner.strTags.split(",").map((tag, index) => (
                  <Badge
                    variant={
                      ["green", "red", "orange", "blue", "yellow"][index % 5]
                    }
                    key={tag}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
                  </Badge>
                ))}
            </Flex>
          </div>
          <Flex
            sx={{
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button onClick={handleLike}>
              {loading ? "Loading..." : "Like"}
            </Button>
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
