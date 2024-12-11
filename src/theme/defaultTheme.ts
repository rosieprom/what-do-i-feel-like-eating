import { makeTheme } from "@theme-ui/css/utils";

export const defaultTheme = makeTheme({
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#10002b",
    background: "#fff",
    primary: "#7047EB",
    secondary: "#F53E6C",
    muted: "#F4F0FE",
    highlight: "#5523E7",
    purple: "hsl(290, 100%, 80%)",
    gray: "#E5E4ED",
    modes: {
      dark: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "#5523E7",
        purple: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "#E5E4ED",
      },
    },
  },
  text: {
    default: {
      color: "text",
      fontSize: 3,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    p: {
      variant: "text.paragraph",
      fontSize: 0,
      wordWrap: "break-word",
      wordSpacing: 1,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    navlink: {
      color: "highlight",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
      ":active": {
        color: "secondary",
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      flexDirection: "column",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  badges: {
    purple: {
      color: "#5539BC",
      bg: "muted",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
    pink: {
      color: "#BC47A3",
      bg: "#FEEBFE",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
    red: {
      color: "#BD3D63",
      bg: "#FEF0F5",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
    green: {
      color: "#366E50",
      bg: "#EFFAF1",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
    blue: {
      color: "#277697",
      bg: "#ECFBFF",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
    orange: {
      color: "#C15F45",
      bg: "#FFEFF0",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
    yellow: {
      color: "#796510",
      bg: "#FDFAEE",
      padding: "0.5em 1em",
      fontSize: 2,
      borderRadius: 20,
      margin: 1,
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      cursor: "pointer",
      "&:hover": {
        bg: "highlight",
        color: "background",
      },
    },
    secondary: {
      color: "#5539BC",
      bg: "muted",
      cursor: "pointer",
      "&:hover": {
        bg: "#F7F5FB",
        color: "mute",
      },
    },
    tertiary: {
      color: "#BC47A3",
      bg: "#FEEBFE",
      cursor: "pointer",
      "&:hover": {
        bg: "#FAF4FA",
        color: "#BC47A3",
      },
    },
    destruction: {
      color: "#fff",
      bg: "secondary",
      cursor: "pointer",
      "&:hover": {
        bg: "#F5164F",
        color: "#fff",
      },
    },
  },
  links: {
    default: {
      color: "accent",
      textDecoration: "none",
      ":hover": {
        color: "highlight",
        textDecoration: "underline",
      },
    },
    bold: {
      fontWeight: "bold",
    },
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
    },
  },
  sizes: {
    sidebar: 200,
    recipeSidebar: 400,
  },
});
