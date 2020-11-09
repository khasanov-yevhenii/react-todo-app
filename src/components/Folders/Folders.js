import React from "react";

import "./Folders.scss";
import removeSvg from './../../assets/images/remove.svg';

const Folders = (props) => {
    return (
        <ul className="todo__items">
            {
                props.items.map(item => (
                    <li className={item.active ? 'active' : ''} key={item.title}>
                        <span className={"badge " + item.color}/>
                        <span className="folder-title">{item.title}</span>
                        <img onClick={() => {
                            props.onRemoveFolder(item);
                        }} className="folder-remove" src={removeSvg} alt="remove"/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Folders;
