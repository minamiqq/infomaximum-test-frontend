/// <reference types="@emotion/react/types/css-prop" />

export const CAR_CARD_STYLES = {
  carCard: {
    
  },

  img: {
    width: "inherit",
    height: "310px",
    border: "1px solid #D9D9D9",
    borderRadius: "15px 15px 0 0",
    marginBottom: "26px",
  },

  info: {
    display: "flex",
    "flex-direction": "column",
    gap: "12px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "500",
  },

  subInfo: {
    display: "flex",
    gap: "14px",
    color: "rgb(89, 89, 89)",
    fontSize: "14px",
    lineHeight: "16px",

  },

  price: {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: "500",
  },

  buttons: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
    img: {
      cursor: "pointer",
    },
    button: {
      padding: "19px 99px"
    },
    "button[disabled]": {
      backgroundColor: "#D9D9D9",
    }
  },
  
  favourite: {
    width: "27px",
    height: "24px",
    cursor: "pointer",
    "&:hover": {
      path: {
        fill: "#4F2CD9",
        d: "path('M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24Z')"
      }
    },
  },
  imgContainer: {
    width: "445px",
    height: "310px",
    marginBottom: "26px",
  },

  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255, .5)",
    zIndex: "2",
    width: "445px",
    height: "310px",
    span: {
      color: "#fff",
      backgroundColor: "#000000",
      padding: "15px 34px",
      borderRadius: "15px",
      fontSize: "24px",
      lineHeight: "28px",
    }
  },
}