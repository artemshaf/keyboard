import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ILayoutInterface } from "./Layout.interface";
import { Footer, Header, ThemeProvider } from "@components";
import { store } from "@store";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  styled,
} from "@mui/material";

const LayoutStyled = styled(Box)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  & > main {
    flex: 1 1 auto;
  }
`;

export const Layout = ({ children, ...props }: ILayoutInterface) => {
  return (
    <LayoutStyled>
      <Header />
      <Box component="main" {...props}>
        {children}
      </Box>
      <Footer />
    </LayoutStyled>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <CssVarsProvider>
            <ThemeProvider>
              <CssBaseline enableColorScheme />
              <Layout>
                <Component {...props} />
              </Layout>
            </ThemeProvider>
          </CssVarsProvider>
        </Provider>
      </BrowserRouter>
    );
  };
};
