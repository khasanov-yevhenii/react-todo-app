import React, {useContext} from "react";
import Tasks from "./Tasks/Tasks";
import {Route} from "react-router-dom";

import "./Main.scss";
import {Context} from "../../context";


const Main = () => {
    const {state} = useContext(Context);

    return (
        <div className="todo__main">
            {
                state.folders.length ? (
                    <>
                        <Route exact path="/">
                            {
                                state.folders.map((folder, index) => (
                                    <Tasks folder={folder} key={index}/>
                                ))
                            }
                        </Route>
                        <Route path="/folder/:id">
                            <Tasks folder={state.activeItem}/>
                        </Route>
                    </>
                ) : <h2 className="not-found">Tasks not found</h2>
            }
        </div>
    );
}

export default Main;
