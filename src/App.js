import React from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {allRoutes} from "./config/routeConfig";
import './index.css'


function App() {
    return (
        <div className="App">
            <Routes>
                {allRoutes.map(route => {
                    return <Route
                        key={route.id}
                        path={route.route}
                        element={route.component}
                        exact={route.exact}/>
                })}
            </Routes>
        </div>
    );
}

export default App;
