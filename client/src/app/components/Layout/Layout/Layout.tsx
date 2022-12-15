import { ILayoutInterface } from "./Layout.interface";
import { Header, Footer } from "@components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store";
import { FunctionComponent } from "react";

export const Layout = ({ children, ...props }: ILayoutInterface) => {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Component {...props} />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
  };
};
