import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "./Store/AuthSlice";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import authService from "./Appwrite/auth";
import { Outlet } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <div className="min-h-screen bg-gray-600 flex flex-wrap content-between">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;
