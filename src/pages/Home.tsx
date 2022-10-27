/** @jsxImportSource theme-ui */
import { Key, useState, useCallback } from "react";
import { foodCategories } from "../utils/categories";
import { Meal } from "../utils/meal";
import { Button, Container, Heading, Paragraph, Grid, Spinner, Text } from "theme-ui";
import Card from "../components/Card";
import Selector from "../components/Selector";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleRecipe = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      const transformedData = data.meals.map((meal: Meal) => {
        return {
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
        };
      });
      setMeals(transformedData);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  }, [category]);

  let content = <Text>Select a type of meal</Text>;

  if (loading) {
    content = <Spinner />
  }

  if (meals.length > 0) {
    content = (
      <Grid width={[128, null, 192]}>
        {meals.map((m: Meal, id: any) => (
          <Card
            key={id}
            imageAlt={`${m.strMeal} Meal`}
            imageSrc={m.strMealThumb}
            cardText={m.strMeal}
            onClick={() => history.push(`/recipe/${m.idMeal}`)}
          />
        ))}
      </Grid>
    );
  }

  return (
    <div>
      <Container p={4}>
        <Heading>What do you feel like eating?</Heading>
        <Paragraph sx={{ marginTop: 2}}>I've always struggled on what I felt like eating every day.</Paragraph>
      </Container>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <aside
          sx={{
            flexGrow: 1,
            flexBasis: "sidebar",
            padding: 4,
          }}
        >
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
          <Button
            sx={{ marginTop: 2 }}
            type="submit"
            onClick={() => handleRecipe()}
          >
            Submit
          </Button>
        </aside>
        <main
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
          }}
        >
          <Container p={4}>{content}</Container>
        </main>
      </div>
    </div>
  );
};

export default Home;
