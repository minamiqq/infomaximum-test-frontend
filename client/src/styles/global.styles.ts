/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif;",
  } as const,
  "html, body, a, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
  },

  "body::-webkit-scrollbar": {
    display: "none",
  },

  "a": {
    textDecoration: "none",
  },
  "button": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontSize: "inherit",
    borderRadius: "5px",
    backgroundColor: "rgb(79, 44, 217)",
    color: "#fff",
    transition: "background-color .2s ease-in-out",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "rgb(50, 19, 172)",
    },
    "&:active": {
      backgroundColor: "rgb(36, 12, 134)",
    }
  },
};
