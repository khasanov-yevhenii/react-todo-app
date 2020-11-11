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
                               onRemoveTask={props.onRemoveTask} onChangeStatus={props.onChangeStatus}
                               key={index}/>
                    ))
                }
            </Route>
            <Route path="/folder/:id">
                {
                    props.activeItem ? (
                        <Tasks folder={props.activeItem} onEditTitle={props.onEditTitle}
                               onCreateTask={props.onCreateTask}
                               onChangeStatus={props.onChangeStatus} onRemoveTask={props.onRemoveTask}/>
                    ) : (
                        <h2 className="not-found">Tasks not found</h2>
                    )
                }
            </Route>
        </div>
    );
}

export default Main;
