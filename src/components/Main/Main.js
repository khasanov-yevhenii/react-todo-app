import React, {useContext} from "react";
import Tasks from "./Tasks/Tasks";
import {Route} from "react-router-dom";

import "./Main.scss";
import {Context} from "../../context";


const Main = (props) => {
    const {state} = useContext(Context);


    return (
        <div className="todo__main">
            <Route exact path="/">
                {
                    state.folders.map((folder, index) => (
                        <Tasks folder={folder} key={index}/>
                    ))
                }
            </Route>
            <Route path="/folder/:id">
                {
                    props.activeItem ? (
                        <Tasks folder={props.activeItem}/>
                    ) : (
                        <h2 className="not-found">Tasks not found</h2>
                    )
                }
            </Route>
        </div>
    );
}

export default Main;
