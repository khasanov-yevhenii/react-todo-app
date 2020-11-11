import React from "react";

import removeSvg from "./../../../../assets/images/remove.svg";
import "./Task.scss";


const Task = (props) => {
    return (
        <div className="tasks__item">
            <div className="checkbox">
                <input type="checkbox" id={`task-${props.task.id}`} defaultChecked={props.task.completed}
                       onClick={() => {
                           props.onChangeStatus(props.folderId, props.task.id);
                       }}/>
                <label htmlFor={`task-${props.task.id}`}>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg" opacity="0">
                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B2B2B2"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>
            <p className="text">{props.task.content}</p>
            <div className="buttons">
                <img src={removeSvg} alt="remove" onClick={() => {
                    props.onRemoveTask(props.folderId, props.task.id);
                }}/>
            </div>
        </div>

    );
}

export default Task;
