import { ThemeProvider } from "styled-components";
import React from 'react'

const theme = () => {
    return (
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",  // Added missing quotes around #fff
      black: "#212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",  // Added a comma at the end of the line
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",  // Corrected the 'Linear-gradient' to 'linear-gradient'
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",  // Added a comma at the end of the line
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },

        colors: {
          heading: "rgb(24 24 29)",
          text: "rgba(29, 29, 29, .8)",
          white: "#fff",  // Added missing quotes around #fff
          black: "#212529",
          helper: "#8490ff",
    
          bg: "#F6F8FA",
          footer_bg: "#0a1435",  // Added a comma at the end of the line
          btn: "rgb(98 84 243)",
          border: "rgba(98, 84, 243, 0.5)",
          hr: "#ffffff",
          gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",  // Corrected the 'Linear-gradient' to 'linear-gradient'
          shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",  // Added a comma at the end of the line
        },
        media: {
          mobile: "768px",
          tab: "998px",
        },
        );
    };

      

export default theme;