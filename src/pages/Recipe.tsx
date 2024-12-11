/** @jsxImportSource theme-ui */
import { Suspense, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Image,
  Flex,
  Heading,
  Button,
  Badge,
  Paragraph,
  Text,
  Spinner,
  Link,
} from "theme-ui";
import { getMealById, Meal } from "../api/meal-api";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const [dinner, setDinner] = useState<Meal | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/liked-recipes");
  };

  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      try {
        const meal = await getMealById(id);
        setDinner(meal);
        const ingredients = Object.entries(meal)
          .filter(
            ([key, value]) =>
              key.startsWith("strIngredient") && value !== "" && value !== null
          )
          .map(([key, value]) => value);
        const measurements = Object.entries(meal)
          .filter(
            ([key, value]) =>
              key.startsWith("strMeasure") && value !== "" && value !== null
          )
          .map(([key, value]) => value);

        // Merge measurements to match ingredients in order
        const ingredientList = ingredients.map(
          (ingredient, index) => `${measurements[index]} ${ingredient}`
        );

        setIngredients(ingredientList);
      } catch (error) {
        console.error("Failed to fetch meal:", error);
      }
      setLoading(false);
    };

    getRecipe();
  }, [id]);

  return (
    <Container
      sx={{
        alignItems: "stretch",
        flex: 1,
      }}
    >
      {dinner && !loading ? (
        <Suspense fallback={<Spinner />}>
          <Flex
            sx={{
              flexDirection: ["column", "column", "row"],
              gap: 4,
              alignItems: "stretch",
              maxWidth: ["100%", "80%", "60%"],
              margin: "auto",
            }}
          >
            <aside
              sx={{
                flexGrow: 1,
                flexBasis: "recipeSidebar",
                display: "flex",
                flexDirection: "column",
                alignItems: ["center", "flex-start"],
              }}
            >
              <Heading
                as="h1"
                sx={{
                  my: 3,
                  color: "text",
                  display: ["block", "block", "none"],
                }}
              >
                {dinner.strMeal}
              </Heading>
              <Image
                src={dinner.strMealThumb}
                alt={dinner.strMeal}
                sx={{
                  height: [200, 220, 280],
                  width: "auto",
                  m: 2,
                }}
              />
              <Heading
                as="h3"
                sx={{
                  color: "text",
                }}
              >
                Ingredients
              </Heading>
              <div
                sx={{
                  marginTop: 2,
                  display: "grid",
                  gridGap: 1,
                  textAlign: ["center", "left", "left"],
                }}
              >
                {Object.keys(ingredients).map((key: any, index: any) => (
                  <Text variant="paragraph" key={index}>
                    {ingredients[key]}
                  </Text>
                ))}
              </div>
              <Button sx={{ marginTop: 2 }} onClick={handleNavigation}>
                Go back
              </Button>
              <Link variant="default" href={dinner.strSource} target="_blank">
                <Button sx={{ marginTop: 2 }} variant="secondary">
                  Recipe Source
                </Button>
              </Link>
              {dinner.strYoutube && (
                <Link
                  variant="default"
                  href={dinner.strYoutube}
                  target="_blank"
                >
                  <Button sx={{ marginTop: 2 }} variant="tertiary">
                    YouTube
                  </Button>
                </Link>
              )}
            </aside>
            <main
              sx={{
                flexGrow: 99999,
                flexBasis: 0,
                minWidth: 320,
              }}
            >
              <Heading
                as="h1"
                sx={{
                  my: 3,
                  color: "text",
                  display: ["none", "none", "block"],
                }}
              >
                {dinner.strMeal}
              </Heading>
              <Flex
                sx={{
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: ["center", "flex-start"],
                }}
              >
                {dinner.strCategory && (
                  <Badge variant="blue">{dinner.strCategory}</Badge>
                )}
                {dinner.strArea && (
                  <Badge variant="pink">{dinner.strArea}</Badge>
                )}
                {dinner.strDrinkAlternate && (
                  <Badge variant="green">{dinner.strDrinkAlternate}</Badge>
                )}
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

              <Container sx={{ my: 3 }}>
                <Paragraph
                  variant="paragraph"
                  sx={{
                    variant: "paragraph",
                    textAlign: "justify",
                    textAlignLast: "start",
                    textJustify: "auto",
                    whiteSpace: "pre-wrap",
                    color: "text",
                  }}
                >
                  {dinner.strInstructions}
                </Paragraph>
              </Container>
            </main>
          </Flex>
        </Suspense>
      ) : (
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            minHeight: "100%",
          }}
        >
          <Spinner />
          <Heading
            as="h3"
            sx={{
              color: "text",
            }}
          >
            Loading the recipe
          </Heading>
        </Flex>
      )}
    </Container>
  );
};

export default Recipe;
