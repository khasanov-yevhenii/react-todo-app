import React, {useEffect, useReducer} from "react";
import Folders from "./components/Folders/Folders";
import AddButton from "./components/AddButton/AddButton";
import AllTasks from "./components/AllTasks/AllTasks";
import Main from "./components/Main/Main";
import {useHistory, useLocation} from "react-router-dom";
import {Context} from "./context";
import reducer from "./reducer";
import store from "./state";


const App = () => {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('state')) || store);
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
        const folderId = history.location.pathname.split('folder/')[1];
        if (state.folders) {
            const newActiveItem = state.folders.find(folder => folder.id === Number(folderId));
            dispatch({
                type: "SET_ACTIVE_ITEM",
                payload: newActiveItem
            })
        }
    }, [state.folders, location])

    return (
        <Context.Provider value={{state, dispatch}}>
            <div className="todo">
                <div className="todo__sidebar">
                    <AllTasks/>
                    <Folders/>
                    <AddButton/>
                </div>
                <Main/>
            </div>
        </Context.Provider>
    );
}

export default App;
