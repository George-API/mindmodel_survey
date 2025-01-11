import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      "Roboto",
      "Expressway",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
      fontFamily: "Roboto, Expressway, Arial",
    },
    h2: {
      fontWeight: 600,
      fontFamily: "Roboto, Expressway, Arial",
    },
    h3: {
      fontWeight: 600,
      fontFamily: "Roboto, Expressway, Arial",
    },
    h4: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial",
    },
    h5: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial",
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial",
    },
    body1: {
      fontWeight: 400,
      fontFamily: "Roboto, Expressway, Arial",
    },
    body2: {
      fontWeight: 400,
      fontFamily: "Roboto, Expressway, Arial",
    },
    button: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial",
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: "#3442DA",
      100: "#EBEEFF",
      200: "#D4D8FA",
      300: "#96A5EF",
      400: "#5966E8",
      500: "#3442DA",
      600: "#2D39B2",
      700: "#25308A",
      800: "#1C2663",
    },
    secondary: {
      main: "#757575",
      100: "#FFFFFF",
      200: "#F7F7F7",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#757575",
      600: "#212121",
      700: "#000000",
    },
    success: {
      main: "#B5E5B5",
    },
    info: {
      main: "#FFE5B4",
    },
    error: {
      main: "#FFB4B4",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          height: 100%;
          min-height: 100vh;
          background-color: #F9FAFF;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }
        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
          min-height: calc(100vh - 106px - 320px);
          display: flex;
          flex-direction: column;
        }
      `,
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme; 