import {
  colors,
  createTheme,
  ThemeProvider as MUIThemeProvider,
  darkScrollbar,
  useColorScheme,
} from "@mui/material";
import { IThemeProviderInterface } from "./ThemeProvider.interface";
import { ruRU } from "@mui/material/locale";

const themeLight = createTheme(
  {
    palette: {
      background: {
        default: colors.blue[400],
        paper: colors.blue[600],
      },
      text: {
        primary: colors.common.white,
      },
    },
    typography: {
      allVariants: {
        color: colors.common.white,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: colors.blue[500],
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            color: colors.common.white,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar({
              active: colors.blue[600],
              thumb: colors.blue[400],
              track: colors.blue[100],
            }),
          },
        },
      },
    },
  },
  ruRU
);

const themeDark = createTheme(
  {
    palette: {
      background: {
        default: colors.grey[800],
        paper: colors.grey[900],
      },
      text: {
        primary: colors.common.white,
      },
    },
    typography: {
      allVariants: {
        color: colors.common.white,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar({
              active: colors.grey[800],
              thumb: colors.grey[600],
              track: colors.grey[200],
            }),
          },
        },
      },
    },
  },
  ruRU
);

export const ThemeProvider = ({ children }: IThemeProviderInterface) => {
  const { mode } = useColorScheme();

  const theme = mode === "dark" ? themeDark : themeLight;

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
