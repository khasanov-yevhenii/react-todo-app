import React from "react";
import Tasks from "./Tasks/Tasks";

import "./Main.scss";


const Main = (props) => {
    return (
        <div className="todo__main">
            <Tasks folder={props.folders[0]}/>
        </div>
    );
}

export default Main;
