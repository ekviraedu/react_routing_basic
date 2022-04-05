import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Teams from "./routes/teams";
import Players from "./routes/players";
import Stats from "./routes/stats";
import "./styles.css";
//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="teams" element={<Teams />} />
        <Route path="players" element={<Players />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Player</p>
              </main>
            }
          />
          <Route path=":statsId" element={<Stats />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

/*root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
