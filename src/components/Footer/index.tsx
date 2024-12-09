/** @jsxImportSource theme-ui */
import { Paragraph, Link } from "theme-ui";

const Footer = () => {
  return (
    <footer
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        backgroundColor: "muted",
        color: "text",
      }}
    >
      <Paragraph>
        &copy; 2024 Made with ❤️ by{" "}
        <Link
          variant="default"
          sx={{
            color: "secondary",
          }}
          href="https://www.rosieprom.com"
        >
          Rosie
        </Link>{" "}
      </Paragraph>
    </footer>
  );
};
export default Footer;
