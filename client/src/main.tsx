import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@utils";
import "./app/styles/main.scss";
import { Loader } from "@components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);
