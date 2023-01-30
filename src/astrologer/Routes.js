import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import Layout from "./layout/Layout";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile";
import PrivateRoute from './utils/PrivateRoute'

function AstrologerRoutes() {
    return useRoutes([
        {
            path: "astro",
            element: <Layout />,
            children: [
                { path: "login", element: <Login /> },
                { path: "signup", element: <Registration /> },
                { path: "dashboard", element: <PrivateRoute> <Dashboard /> </PrivateRoute> },
                { path: "chat", element: <PrivateRoute> <Chat /> </PrivateRoute> },
                { path: "profile", element: <PrivateRoute> <Profile /> </PrivateRoute> },
            ],
        },
    ]);
}

export default AstrologerRoutes;
