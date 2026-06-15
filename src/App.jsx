import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage'
import BrokerLogin from './pages/BrokerLogin'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/broker-login" element={<BrokerLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
