import React from 'react';
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import './index.css';

function Home() {
    return (
        <div style={{backgroundColor:""}}>
           
            <Navbar/>
            <h4>Select Any Value from dropdown :</h4>
            <Dropdown/>
        </div>
    )
}

export default Home;
