import React from "react";

import removeSvg from './../../assets/images/remove.svg';
import "./Folders.scss";


const Folders = (props) => {
    const handleActiveItem = (target, folder) => {
        if (target.tagName !== "IMG") {
            props.onActiveItem(folder);
        }
    }

    return (
        <ul className="todo__items">
            {
                props.folders.map((folder, index) => (
                    <li className={props.activeItem && props.activeItem.id === folder.id ? 'active' : ''} key={index}
                        onClick={(event) => handleActiveItem(event.target, folder)}>
                        <span className="badge" style={{backgroundColor: folder.color.hex}}/>
                        <span className="folder-title">{folder.title}</span>
                        <img onClick={() => {
                            props.onRemoveFolder(folder.id);
                        }} className="folder-remove" src={removeSvg} alt="remove"/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Folders;
