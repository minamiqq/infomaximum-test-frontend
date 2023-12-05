/// <reference types="@emotion/react/types/css-prop" />

export const CATALOG_STYLES = {
  catalog: {
    display: "flex",
    "flex-direction": "column",
    maxWidth: "1920px",
    margin: "0 auto",
    padding: "0 40px"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "42px",
  },

  main: {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "73px 20px",
    justifyContent: "center",
    marginBottom: "73px",
  },
  
  searchWrapper: {
    border: "1px solid #D9D9D9",
    borderRadius: "5px",
    widrh: "445px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px 4px 6px 10px",
  },

  input: {
    height: "24px",
    border: "none",
    outline: "none",
    width: "407px",
  },

  select: {
    display: "block",
    cursor: "pointer",
    fontSize: "16px",
    lineHeight: "18px",
    border: "none",
    outline: "none",
    // "appearance": "none",
    option: {
      fontSize: "14px",
      lineHeight: "16px",
    }
  }
}