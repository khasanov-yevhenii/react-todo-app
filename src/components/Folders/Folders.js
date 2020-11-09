import React from "react";

import "./Folders.scss";


const Folders = (props) => {
    return (
        <ul className="todo__items">
            {
                props.items.map(item => (
                    <li className={item.active ? 'active' : ''} key={item.title}>
                        <span className={"badge " + item.color}/>
                        <span>{item.title}</span>
                    </li>
                ))
            }
        </ul>
    );
}

export default Folders;
