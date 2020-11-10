import React from "react";
import Tasks from "./Tasks/Tasks";

import "./Main.scss";


const Main = (props) => {
    return (
        <div className="todo__main">
            <Tasks folder={props.folder} onEditTitle={props.onEditTitle} onCreateTask={props.onCreateTask}/>
        </div>
    );
}

export default Main;
