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
import BotPage from "./pages/BotPage";
import BotSuccessPage from "./pages/BotSuccessPage";
import BotFailedPage from "./pages/BotFailedPage";
import ClaimPage from "./pages/ClaimPage";
import BoostPage from "./pages/BoostPage";
import AppsPage from "./pages/AppsPage";
import ReferalPage from "./pages/ReferalPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import StatsPage from "./pages/StatsPage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<OnboardingPage3 />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:telegram_id" element={<HomePage />} />
      <Route path="/connect-wallet" element={<ConnectWalletPage />} />
      <Route path="/claim" element={<ClaimPage />} />
      <Route path="/earn" element={<EarnPage />} />
      <Route path="/app" element={<AppsPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/referal" element={<ReferalPage />} />
      <Route path="/bot" element={<BotPage />} />
      <Route path="/boost" element={<BoostPage />} />
      <Route path="/bot-success" element={<BotSuccessPage />} />
      <Route path="/bot-failed" element={<BotFailedPage />} />
    </Route>
  )
);

export default App;
