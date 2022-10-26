import { makeTheme } from "@theme-ui/css/utils";

export const defaultTheme = makeTheme({
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
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
    text: "hsl(210, 50%, 96%)",
    background: "hsl(230, 25%, 18%)",
    primary: "hsl(260, 100%, 80%)",
    secondary: "hsl(290, 100%, 80%)",
    highlight: "hsl(260, 20%, 40%)",
    purple: "hsl(290, 100%, 80%)",
    muted: "hsla(230, 20%, 0%, 20%)",
    gray: "hsl(210, 50%, 60%)",
  },
  text: {
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
      textDecoration: "none"
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      flexDirection: "column"
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  badges: {
    primary: {
      color: "text",
      bg: "primary",
      padding: 1,
      borderRadius: 2,
      margin: 1,
    },
    muted: {
      color: "text",
      bg: "secondary",
      padding: 1,
      borderRadius: 2,
      margin: 1,
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      cursor: 'pointer',
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      cursor: 'pointer',
    },
  },
  sizes: {
    sidebar: 200,
    recipeSidebar: 400
  },
});
