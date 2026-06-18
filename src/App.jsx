import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage'
import BrokerLogin from './pages/BrokerLogin'
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard";
import SignalPage from "./pages/SignalPage";
import SignalDetails from "./pages/SignalDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/broker-login" element={<BrokerLogin />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signal" element={<SignalPage />} />
                <Route path="/signal-details" element={<SignalDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
