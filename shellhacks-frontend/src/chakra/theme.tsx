// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        main: {
          bg: "#2c5e85", // Change the background color to red
          _hover: { bg: "#225175", color: "#b0b0b0" },
        },
      },
      // Base style
      // baseStyle: {
      //   bg: "#2c99ec",
      //   _hover: { color: "black", bg: "#225175" },
      // },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#f0f0f0",
      },
    },
  },
});
export default theme;
