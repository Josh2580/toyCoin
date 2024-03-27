import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
//Routes
import Root from "./pages/routes/Root";
import ErrorPage from "./pages/routes/ErrorPage";
//Pages
import OnboardingPage3 from "./pages/OnboardingPage3";
import HomePage from "./pages/HomePage";
import EarnPage from "./pages/EarnPage";
import BoostPage from "./pages/BoostPage";
import BotSuccessPage from "./pages/BotSuccessPage";
import BotFailedPage from "./pages/BotFailedPage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<OnboardingPage3 />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/earn" element={<EarnPage />} />
      <Route path="/boost" element={<BoostPage />} />
      <Route path="/bot-success" element={<BotSuccessPage />} />
      <Route path="/bot-failed" element={<BotFailedPage />} />
    </Route>
  )
);

export default App;
