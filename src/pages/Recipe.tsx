/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Image,
  Flex,
  Box,
  Heading,
  Button,
  Badge,
  Paragraph,
  Container,
} from "theme-ui";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipeData, setRecipeData] = useState({
    id: 0,
    nationality: "",
    meal: "",
    recipeTitle: "",
    instructions: "",
    thumbnail: "",
    recipeSource: "",
    youtubeLink: "",
  });

  let history = useHistory();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const recipeData = await recipeResponse.json();

        const generateMeasurements = () => {
          const measurements = [];
          for (const [key, value] of Object.entries(recipeData.meals[0])) {
            var m;
            if (key.includes("strMeasure")) {
              m = value as string;
              if (m !== undefined) {
                measurements.push(m);
              }
            }
          }
          return measurements;
        };

        const generateIngredients = () => {
          const ingredients = [];
          for (const [key, value] of Object.entries(recipeData.meals[0])) {
            var i;
            if (key.includes("strIngredient")) {
              i = value as string;
              if (i !== undefined) {
                ingredients.push(i);
              }
            }
          }
          return ingredients;
        };

        const generateIngredientList = () => {
          const measurements = generateMeasurements();
          const ingredients = generateIngredients();

          const listIngredients = [] as any;

          measurements.map((m) => {
            ingredients.map((i) => {
              listIngredients.push(`${m} ${i}`);
            });
          });

          setIngredientsList(listIngredients);
        };

        console.log({ ingredientsList });

        //generateIngredientList();

        recipeData.meals.map((recipe: any) =>
          setRecipeData({
            id: recipe.idMeal,
            nationality: recipe.strArea,
            meal: recipe.strCategory,
            recipeTitle: recipe.strMeal,
            instructions: recipe.strInstructions,
            thumbnail: recipe.strMealThumb,
            recipeSource: recipe.strSource,
            youtubeLink: recipe.strYoutube,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, [id]);

  console.log(recipeData.instructions)

  return (
    <Flex
      sx={{
        minHeight: "100vh",
      }}
    >
      <aside
        sx={{
          flexGrow: 1,
          flexBasis: "recipeSidebar",
        }}
      >
        <Image
          src={recipeData.thumbnail}
          sx={{
            height: [100, 250, 350],
            width: "auto",
          }}
        />
        <Heading as="h3">Ingredients</Heading>
        <Button onClick={() => history.push("/")}>Go back</Button>
      </aside>
      <main
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: 320,
        }}
      >
        <Heading>{recipeData.recipeTitle}</Heading>
        <Badge>{recipeData.meal}</Badge>
        <Badge variant="muted">{recipeData.nationality}</Badge>
        <Container>
          <Paragraph>{recipeData.instructions}</Paragraph>
        </Container>
      </main>
    </Flex>
  );
};

export default Recipe;
