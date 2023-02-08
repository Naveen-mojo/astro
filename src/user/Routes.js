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
import Payment from "./pages/Payment";
import AddWallet from "./pages/AddWallet";
import PaymentSuccess from './componet/PaymentSuccess';
import PaymentCancle from './componet/PaymentCancle';
import Compatibility from "./pages/Compatibility";
import TodaysDetail from "./pages/horoscope/TodaysDetail";

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
                { path: "compatibility/:fromId/:toId", element: <Compatibility /> },
                { path: "horoscope/:zodiacType/:zodiacSign", element: <TodaysDetail /> },
                // fetch api data
                // { path: "horoscope/:zodiacTypeId/:zodiacId", element: <TodaysDetail /> },
                { path: "add-money-wallet", element: <AddWallet /> },
                { path: "payment/:id", element: <Payment /> },
                { path: "success", element: <PaymentSuccess /> },
                { path: "cancel", element: <PaymentCancle /> },
                { path: "*", element: <PageNotFound /> },
            ],
        },
    ]);
}

export default Routes;
