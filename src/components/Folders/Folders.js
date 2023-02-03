import {useContext} from "react";
import {useHistory} from "react-router-dom";
import removeSvg from './../../assets/images/remove.svg';
import "./Folders.scss";
import {Context} from "../../context/context";

const Folders = () => {
    const {state, dispatch} = useContext(Context);
    let history = useHistory();

    const handleActiveItem = (target, folder) => {
        if (target.tagName !== "IMG") {
            history.push(`/folder/${folder.id}`);
            dispatch({
                type: "SET_ACTIVE_ITEM",
                payload: folder
            })
        }
    }
    const handleRemoveFolder = (folder) => {
        if (state.activeItem && state.activeItem.id === folder.id) {
            history.push("/");
        }
        dispatch({
            type: "REMOVE_FOLDER",
            payload: folder.id
        })

    }

    return (
        <ul className="todo__items">
            {
                state.folders.map((folder, index) => (
                    <li className={state.activeItem && state.activeItem.id === folder.id ? 'active' : ''} key={index}
                        onClick={(event) => handleActiveItem(event.target, folder)}>
                        <span className="badge" style={{backgroundColor: folder.color.hex}}/>
                        <span className="folder-title">{folder.title}</span>
                        <img onClick={() => handleRemoveFolder(folder)} className="folder-remove" src={removeSvg}
                             alt="remove"/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Folders;
