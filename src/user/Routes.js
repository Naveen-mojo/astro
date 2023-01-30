import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import PageNotFound from "./componet/PageNotFound";
import FreeKundli from "./pages/FreeKundli";
import MatchMaking from "./pages/MatchMaking";
import ShubhMuhurat from "./pages/ShubhMuhurat";
import ChatWithAstrologer from "./pages/ChatWithAstrologer";
import TalkWithAstrologer from "./pages/TalkWithAstrologer";
import AstroProfile from "./pages/AstroProfile";

function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "", element: <Home /> },
                { path: "free-kundli", element: <FreeKundli /> },
                { path: "match-making", element: <MatchMaking /> },
                { path: "shubh-muhurat", element: <ShubhMuhurat /> },
                { path: "chat-with-astrologer", element: <ChatWithAstrologer /> },
                { path: "talk-with-astrologer", element: <TalkWithAstrologer /> },
                { path: "astro-profile/:id", element: <AstroProfile /> },
                { path: "*", element: <PageNotFound /> },
            ],
        },
    ]);
}

export default Routes;
