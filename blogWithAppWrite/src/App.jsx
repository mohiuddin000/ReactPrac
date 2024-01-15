import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "./Store/AuthSlice";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import authService from "./Appwrite/auth";

function App() {
    const [loading, setLoading] = useState();
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
                <main></main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;
