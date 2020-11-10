import React from "react";
import Tasks from "./Tasks/Tasks";
import {Route} from "react-router-dom";

import "./Main.scss";


const Main = (props) => {
    return (
        <div className="todo__main">
            <Route exact path="/">
                {
                    props.folders.map((folder, index) => (
                        <Tasks folder={folder} onEditTitle={props.onEditTitle} onCreateTask={props.onCreateTask}
                               onRemoveTask={props.onRemoveTask} key={index}/>
                    ))
                }
            </Route>
            <Route exact path="/folder/:id">
                {props.activeItem &&
                <Tasks folder={props.activeItem} onEditTitle={props.onEditTitle} onCreateTask={props.onCreateTask}/>}
            </Route>
        </div>
    );
}

export default Main;
