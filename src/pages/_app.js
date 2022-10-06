import React from "react";
import IndexPage from "./index";
import BusinessesPage from "./businesses";
import { BrowserRouter as  Route, Routes } from 'react-router-dom'
import NotFoundPage from "./not-found.js";
import { ThemeProvider } from "../utils/theme";

function App(props) {
  return (
    <ThemeProvider>
        <Routes>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/businesses" component={BusinessesPage} />
            <Route component={NotFoundPage} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
