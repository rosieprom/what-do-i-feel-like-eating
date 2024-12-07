/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Image,
  Flex,
  Heading,
  Button,
  Badge,
  Paragraph,
  Container,
  Text,
} from "theme-ui";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipeData, setRecipeData] = useState({
    id: 0,
    nationality: "",
    meal: "",
    recipeTitle: "",
    instructions: "",
    thumbnail: "",
    recipeSource: "",
    youtubeLink: "",
    drinkAlternate: "",
  });

  const [ingredients, setIngredients] = useState<string[]>([]);

  let history = useHistory();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const recipeData = await recipeResponse.json();

        const generateIngredientsList = () => {
          let loopedIngredients: never | any[] = [];
          let loopedMeasurements: never | any[] = [];

          for (const [key, value] of Object.entries(recipeData.meals[0])) {
            var i: string;
            var m: string;

            if (key.includes("strIngredient")) {
              i = value as string;
              if (i) {
                loopedIngredients.push(i);
              }
            }
            if (key.includes("strMeasure")) {
              m = value as string;
              if (m) {
                loopedMeasurements.push(m);
              }
            }
          }

          const mergeArrays = (
            arr1: Array<any> = [],
            arr2: Array<any> = []
          ) => {
            const res = arr1.reduce((acc, elem, index) => {
              acc[elem] = arr2[index];
              return acc;
            }, {});
            return res;
          };

          setIngredients(
            mergeArrays(loopedMeasurements as any, loopedIngredients as any)
          );
        };

        generateIngredientsList();

        const parsedData = JSON.parse(JSON.stringify(recipeData.meals));

        parsedData.map((recipe: any) =>
          setRecipeData({
            id: recipe.idMeal,
            nationality: recipe.strArea,
            meal: recipe.strCategory,
            recipeTitle: recipe.strMeal,
            instructions: recipe.strInstructions,
            thumbnail: recipe.strMealThumb,
            recipeSource: recipe.strSource,
            youtubeLink: recipe.strYoutube,
            drinkAlternate: recipe.strDrinkAlternate,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, [id]);

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
            height: [190, 220, 280],
            width: "auto",
          }}
        />
        <Heading as="h3">Ingredients</Heading>
        <div
          sx={{
            marginTop: 2,
            display: "grid",
            gridGap: 1,
          }}
        >
          {Object.keys(ingredients).map((key: any, index: any) => (
            <Text variant="paragraph" key={index}>
              {key} {ingredients[key]}
            </Text>
          ))}
        </div>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => history.push("/liked-recipes")}
        >
          Go back
        </Button>
      </aside>
      <main
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: 320,
        }}
      >
        <Heading as="h1" sx={{ my: 3 }}>
          {recipeData.recipeTitle}
        </Heading>
        {recipeData.meal && <Badge>{recipeData.meal}</Badge>}
        {recipeData.nationality && (
          <Badge variant="muted">{recipeData.nationality}</Badge>
        )}
        {recipeData.drinkAlternate && (
          <Badge variant="secondary">{recipeData.drinkAlternate}</Badge>
        )}

        <Container sx={{ my: 3 }}>
          <Paragraph
            variant="paragraph"
            sx={{
              variant: "paragraph",
              textAlign: "justify",
              textAlignLast: "start",
              textJustify: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            {recipeData.instructions.replace(/\\r\\n/g, "<br />")}
          </Paragraph>
        </Container>
      </main>
    </Flex>
  );
};

export default Recipe;
