import React from 'react';
import Header from './components/Header';
import AnimalTribute from './components/AnimalTribute';
import Footer from './components/Footer';
import MemeCommunication from "./components/MemeCommunication";

function App() {
    return (
        <div className="App">
            <Header />
            <MemeCommunication />
            <AnimalTribute />
            <Footer />
        </div>
    );
}

export default App;
