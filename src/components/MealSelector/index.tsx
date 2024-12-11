/** @jsxImportSource theme-ui */
import { Button, Box, Flex, Heading, Image, Badge, Spinner } from "theme-ui";
import { Meal } from "../../api/meal-api";

interface MealDisplayProps {
  meal: Meal;
  loading: boolean;
  onLike: () => void;
  onDislike: () => void;
}

const MealDisplay = ({
  meal,
  loading,
  onLike,
  onDislike,
}: MealDisplayProps) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            padding: 3,
            borderRadius: 4,
            width: [320, 400],
          }}
        >
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
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
              width: "100%",
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
              {meal.strMeal}
            </Heading>
            <Flex
              sx={{
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Badge variant="purple">{meal.strCategory}</Badge>
              <Badge variant="pink">{meal.strArea}</Badge>
              {meal.strTags &&
                meal.strTags.split(",").map((tag, index) => (
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
            <Button onClick={onLike}>{loading ? "Loading..." : "Like"}</Button>
            <Button onClick={onDislike} disabled={loading}>
              Dislike
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default MealDisplay;
