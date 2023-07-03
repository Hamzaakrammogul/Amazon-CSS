import React, { Fragment } from "react";
import './MainDashboard.css';
import Cards from "../Cards/Cards";

const MainDashboard = () => {

    return (

        <div className="mainDashboard">
            <h1>Dashboard</h1>
            <Cards />
        </div>
    );
}

export default MainDashboard;