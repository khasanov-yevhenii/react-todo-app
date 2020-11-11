import React, {useContext} from "react";

import removeSvg from './../../assets/images/remove.svg';
import "./Folders.scss";
import {Context} from "../../context";


const Folders = (props) => {
    const {state, dispatch} = useContext(Context);
    const handleActiveItem = (target, folder) => {
        if (target.tagName !== "IMG") {
            props.onActiveItem(folder);
        }
    }

    return (
        <ul className="todo__items">
            {
                state.folders.map((folder, index) => (
                    <li className={props.activeItem && props.activeItem.id === folder.id ? 'active' : ''} key={index}
                        onClick={(event) => handleActiveItem(event.target, folder)}>
                        <span className="badge" style={{backgroundColor: folder.color.hex}}/>
                        <span className="folder-title">{folder.title}</span>
                        <img onClick={() => {
                            dispatch({
                                type: "REMOVE_FOLDER",
                                payload: folder.id
                            })
                        }} className="folder-remove" src={removeSvg} alt="remove"/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Folders;
