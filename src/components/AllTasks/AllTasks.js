import React from "react";

import listSvg from "./../../assets/images/list.svg";


const AllTasks = (props) => {
    return (
        <ul className="todo__items">
            <li className={props.active ? "active" : null} onClick={props.onActiveItem}>
                <i>
                    <img src={listSvg} alt="list"/>
                </i>
                <span>All tasks</span>
            </li>
        </ul>
    );
}

export default AllTasks;
