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
    
    const [message, setarrivalMessage] = React.useState(null)
    const [st, setstatus] = React.useState(null)

    function onNotification (arrivalMessage, status){
        setarrivalMessage(arrivalMessage)
        setstatus(status)
    }

    return useRoutes([
        {
            path: "astro",
            element: <Layout arrivalMessage={message} status={st} />,
            children: [
                { path: "login", element: <Login /> },
                { path: "signup", element: <Registration /> },
                { path: "dashboard", element: <PrivateRoute> <Dashboard /> </PrivateRoute> },
                { path: "chat", element: <PrivateRoute> <Chat onNotification={onNotification} /> </PrivateRoute> },
                { path: "profile", element: <PrivateRoute> <Profile /> </PrivateRoute> },
            ],
        },
    ]);
}

export default AstrologerRoutes;
