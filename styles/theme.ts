import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette
  {
    neutral: Palette[ "primary" ];
  }
  interface PaletteOptions
  {
    neutral: PaletteOptions[ "primary" ];
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#E3C37A",
    },
    secondary: {
      main: "#A57A29",
    },
    neutral: {
      main: "#FBF1C2",
    },
    background: {
      default: "#1C1C1C",
      paper: "#212121",
    },
    text: {
      secondary: "#FBF1C2",
      primary: "#FFFFFC",
    },
  },
  typography: {
    fontFamily: [
      "Century-Gothic",
      "Suissnord",
      "Abadi",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face{
        font-family: 'Century-Gothic';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/centuryGothic/CenturyGothic.ttf');
      }
      @font-face{
        font-family: 'Abadi';
        font-weight: bold;
        font-style: normal;
        src: url('/fonts/abadi/abadi_mt_std_extra_bold.ttf');
      }
      @font-face{
        font-family: 'Century-Gothic';
        font-weight: bold;
        font-style: normal;
        src: url('/fonts/centuryGothic/gothicb.ttf');
      }
      @font-face{
        font-family: 'Suissnord';
        font-weight: normal;
        font-style: normal;
        src: url('/fonts/suissnord/Suissnord.ttf');
      }
      `,
    },
  },
});

export default responsiveFontSizes(theme);
