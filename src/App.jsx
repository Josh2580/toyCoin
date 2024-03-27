import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "./pages/routes/Root";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        // loader={rootLoader}
        // action={rootAction}
        // errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route path="contacts/:contactId" element={<Contact />} />
          <Route path="contacts/:contactId/edit" element={<EditContact />} />
          <Route path="contacts/:contactId/destroy" />
        </Route>
      </Route>
    )
  );
  return <router />;
};

export default App;
