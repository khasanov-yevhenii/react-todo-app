import React from "react";
import {useHistory} from "react-router-dom";

import listSvg from "./../../assets/images/list.svg";


const AllTasks = () => {
    let history = useHistory();

    return (
        <ul className="todo__items">
            <li className="active" onClick={() => {
                history.push('/');
            }}>
                <i>
                    <img src={listSvg} alt="list"/>
                </i>
                <span>All tasks</span>
            </li>
        </ul>
    );
}

export default AllTasks;
