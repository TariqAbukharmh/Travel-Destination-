import React from 'react';
import Home from "./components/home/Home";
const data = require('./data/data.json');


function App() {
    return (
    <>
        <Home data = {data}/>
    </> 
    );
}

export default App;