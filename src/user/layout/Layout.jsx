import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../componet/Footer';
import Header from '../componet/Header';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;