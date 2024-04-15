import "./index.css";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

import router from "./components/routes/Routes";
import { AuthProvider } from "./components/context/AuthContext";
import UserProvider from "./components/auth/UserProvider";
import { QueryClient, QueryClientProvider } from "react-query";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <RouterProvider router={router} />
          <Toaster />
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
