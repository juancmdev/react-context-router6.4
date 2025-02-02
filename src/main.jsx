import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
