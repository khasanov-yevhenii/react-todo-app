import React from "react";

import "./Folders.scss";
import removeSvg from './../../assets/images/remove.svg';

const Folders = (props) => {
    return (
        <ul className="todo__items">
            {
                props.folders.map(folder => (
                    <li className={folder.active ? 'active' : ''} key={folder.title}>
                        <span className={"badge " + folder.color}/>
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
