import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import PageNotFound from "./componet/PageNotFound";

function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "", element: <Home /> },
                { path: "*", element: <PageNotFound /> },
            ],
        },
    ]);
}

export default Routes;
