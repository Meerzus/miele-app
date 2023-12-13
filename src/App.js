import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from 'react'


import Header from "./Components/Header";
import Footer from "./Components/Footer";


import HomeScreen from "./Screens/HomeScreen";

function App() {
    return (
        <Router>
            <Header/>

            <Routes>
                <Route path='/' element={<HomeScreen/>} exact/>
            </Routes>

            <Footer/>
        </Router>
    )
}

export default App
