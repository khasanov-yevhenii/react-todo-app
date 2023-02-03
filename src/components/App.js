import {useEffect, useReducer} from "react";
import Folders from "./Folders/Folders";
import CreateFolderButton from "./CreateFolderButton/CreateFolderButton";
import AllTasks from "./AllTasks/AllTasks";
import Main from "./Main/Main";
import {useHistory, useLocation} from "react-router-dom";
import {Context} from "../context/context";
import reducer from "../context/reducer";
import store from "../context/state";

const App = () => {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('store')) || store);
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        localStorage.setItem('store', JSON.stringify(state));
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
                    <CreateFolderButton/>
                </div>
                <Main/>
            </div>
        </Context.Provider>
    );
}

export default App;
