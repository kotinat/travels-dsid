import MuseoModerno from "../assets/fonts/MuseoModerno-VariableFont_wght.ttf";
import UbuntuRegular from "../assets/fonts/Ubuntu-Regular.ttf";

const ubuntu = {
  fontFamily: "Ubuntu",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local(Ubuntu),
    local(Ubuntu-Regular),
    url(${UbuntuRegular}) format('ttf')`,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ["ubuntu", "Roboto"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [ubuntu],
      },
    },
  },
});
