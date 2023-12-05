/// <reference types="@emotion/react/types/css-prop" />

export const FAVOURITE_CAR_STYLES = {
  favouriteCar: {
    display: "flex",
    gap: "20px",
    margin: "0 auto",
    marginBottom: "37px",
    paddingBottom: "24px",
    borderBottom: "1px solid #D9D9D9",
    "&:last-child" : {
      border: "none"
    }
  },

  wrapper: {
    display: "flex",
    "flex-direction": "column",
    justifyContent: "space-around",
    width: "834px",
    paddingRight: "24px",
    height: "309x"
  },

  title: {
    fontSize: "36px",
    lineHeight: "42px",
    marginBottom: "16px",
  },

  img: {
    width: "443px",
    height: "309px",
    border: "1px solid #D9D9D9",
    borderRadius: "12px",
  },

  characteristics: {  
    display: "flex",
    "flex-direction": "column",
    gap: "16px",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#595959",
    marginBottom: "34px",
  },

  price: {
    marginBottom: "20px",
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "500",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    button : {
      padding: "19px 34px"
    }
  },

  deleteBtn: {
    cursor: "pointer",
    transition: "fill .2s ease-in-out",
    path: {
      transition: "fill .2s ease-in-out",
    },
    rect: {
      transition: "stroke .2s ease-in-out",
    },
    "&:hover": {
      fill: "#D73737",
      path: {
        fill: "#fff",
      }
    },
  }
}