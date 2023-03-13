import React from 'react';
import './style/App.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TrainPage from "./pages/TrainPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/main' element={<MainPage/>}/>
                <Route path='/customers' element={<TrainPage databaseName={"CUSTOMERS"}
                                                             tableStructure={<p style={{marginLeft: "2px"}}>Table "customers" contains 8
                                                                 columns: <br/> - customer_id <br/> -
                                                                 first_name <br/> - last_name
                                                                 <br/> - gender <br/> - age <br/> -
                                                                 annual_income <br/> - spending_score <br/> - profession
                                                                 <br/> - family_size </p>}/>}/>
                <Route path='films' element={<TrainPage databaseName={"FILMS"}
                                                        tableStructure={<p style={{marginLeft: "2px"}}><b>Table "film" contains 8 columns:</b> <br/> -
                                                            film_id <br/> - title <br/> - release_year <br/> -
                                                            language_id <br/> - length <br/> - replacement_cost <br/> -
                                                            rating <br/> - special_features <br/> <b>Table "language"
                                                                contains 3 columns:</b> <br/> - language_id <br/> - name <br/> -
                                                            last_update <br/> <b> Table "film_category" contains 3
                                                                columns </b> <br/> - film_id <br/> - category_id <br/> -
                                                            last_update <br/> <b> Table "category" contains 3
                                                                columns </b> <br/> - category_id <br/> - name <br/> -
                                                            last_update <br/> <b>Table "film_actor" contains 3
                                                                columns</b> <br/> -
                                                            actor_id <br/> film_id <br/> last_update <br/> <b>Table "actor"
                                                                contains 4 columns </b> <br/> - actor_id <br/> -
                                                            first_name <br/> - last_name <br/> - last_update
                                                        </p>}/>}/>
                <Route
                    path="/"
                    element={<Navigate to="/main" />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
