/** @jsxImportSource theme-ui */
import { Heading, Link, Paragraph, Container } from "theme-ui";

const About = () => {
  return (
    <main
      sx={{
        width: "100vw",
        flex: "1 1 auto",
      }}
    >
      <Container
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: 3,
          py: 4,
        }}
      >
        <Heading
          sx={{
            marginBottom: 2,
            textAlign: "center",
            color: "primary",
          }}
        >
          About
        </Heading>
        <Paragraph>
          Hi there, this was a website built so that it would be easier for you
          to find what to eat.
        </Paragraph>
        <Paragraph>
          This project was made using{" "}
          <Link
            variant="default"
            sx={{
              color: "secondary",
            }}
            href="https://www.themealdb.com/api.php"
          >
            The Meal API
          </Link>{" "}
          which is a free API service that lets you load up different meals.
        </Paragraph>
        <Paragraph>
          This was a fun side project so I can sharpen my skills as a software
          developer. The tech I used: React, Typescript and AWS Amplify. You can
          view the source code{" "}
          <Link
            variant="default"
            sx={{
              color: "secondary",
            }}
            href="https://github.com/rosieprom/what-do-i-feel-like-eating"
          >
            here
          </Link>
          .
        </Paragraph>
      </Container>
    </main>
  );
};

export default About;
