/** @jsxImportSource theme-ui */
import { Heading, Link, Paragraph } from "theme-ui";

const About = () => {
  return (
    <main
      sx={{
        width: "100%",
        flex: "1 1 auto",
      }}
    >
      <Heading>About</Heading>
      <Paragraph>
        Hi there, this was a website built so that it would be easier for you to
        find what to eat.
      </Paragraph>
      <Paragraph>
        This project was made using{" "}
        <Link variant="default" href="https://www.themealdb.com/api.php">
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
          href="https://github.com/rosieprom/what-do-i-feel-like-eating"
        >
          here
        </Link>
        .
      </Paragraph>
    </main>
  );
};

export default About;
