import React from "react";

const Folders = (props) => {
    return (
        <ul className="todo__items">
            {
                props.items.map(item => (
                    <li className={item.active ? 'active' : ''} key={item.title}>
                        <i>
                            <img src={item.icon} alt="list"/>
                        </i>
                        <span>{item.title}</span>
                    </li>
                ))
            }
        </ul>
    );
}

export default Folders;
