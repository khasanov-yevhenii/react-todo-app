import React, {useEffect, useState, useReducer} from "react";
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
    const [activeItem, setActiveItem] = useState(null);
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
        const folderId = history.location.pathname.split('folder/')[1];
        if (state.folders) {
            const newActiveItem = state.folders.find(folder => folder.id === Number(folderId));
            setActiveItem(newActiveItem);
        }
    }, [state.folders, history.location.pathname, location])

    console.log(state);

    return (
        <Context.Provider value={{state, dispatch}}>
            <div className="todo">
                <div className="todo__sidebar">
                    <AllTasks active={!activeItem} onActiveItem={() => {
                        history.push("/");
                    }}/>
                    <Folders activeItem={activeItem} onActiveItem={(folder) => {
                        history.push(`/folder/${folder.id}`);
                    }}/>
                    <AddButton colors={state.colors}/>
                </div>
                <Main activeItem={activeItem}/>
            </div>
        </Context.Provider>
    );
}

export default App;
