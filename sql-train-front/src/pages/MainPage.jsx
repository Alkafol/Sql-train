import React from 'react';
import DatabaseDescription from "../components/DatabaseDescription";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{margin: "30px"}}>
            <h1 style={{fontSize: "40px"}}>SQL train</h1>
            <p style={{fontSize: "25px", marginTop: "25px"}}>Here you can easily train and improve your SQL
                skills. <br/> Everything is completely free, all what you need
                is just pick any database from the list below and start practising.</p>
            <h2 style={{marginTop: "50px", fontSize: "30px"}}>Databases</h2>
            <div style={{display: "flex", marginTop: "30px"}}>
                <DatabaseDescription name={"Shop database"}
                                     description={"Contains 1 table with detailed info about shop customers."}
                                     list={["Perfect for beginners", "15 tasks", "All solutions provided"]}
                                     handleClick={() => navigate("/customers")}/>
                <DatabaseDescription name={"Films database"}
                                     description={"Contains 6 tables with films, actors, languages and categories."}
                                     list={["Good for intermediate", "n tasks", "All solutions provided"]}
                                     handleClick={() => navigate("/films")}/>
            </div>
        </div>
    );
};

export default MainPage;