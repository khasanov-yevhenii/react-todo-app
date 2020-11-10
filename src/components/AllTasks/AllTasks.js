import React from "react";

import listSvg from "./../../assets/images/list.svg";


const AllTasks = () => {
    return (
        <ul className="todo__items">
            <li>
                <i>
                    <img src={listSvg} alt="list"/>
                </i>
                <span>All tasks</span>
            </li>
        </ul>
    );
}

export default AllTasks;
