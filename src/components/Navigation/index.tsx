/** @jsxImportSource theme-ui */
import { NavLink } from "react-router-dom";
import { Heading } from "theme-ui";

const Navigation = () => {
  return (
    <header
      sx={{
        display: "flex",
        alignItems: "center",
        variant: "styles.header",
        padding: 2
      }}
    >
      <NavLink
        to="/"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        <Heading>wdifle</Heading>
      </NavLink>
      <div sx={{ mx: "auto" }} />
      <NavLink
        to="/"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Github
      </NavLink>
    </header>
  );
};

export default Navigation;
