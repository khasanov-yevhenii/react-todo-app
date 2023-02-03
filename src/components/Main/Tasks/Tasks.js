import React, {useContext} from "react";
import Task from "./Task/Task";
import TasksForm from "./TasksForm/TasksForm";

import editSvg from "./../../../assets/images/edit.svg";
import {Context} from "../../../context/context";
import "./Tasks.scss";


const Tasks = (props) => {
    const {dispatch} = useContext(Context);

    const editTitle = (id, title) => {
        const newTitle = window.prompt('Enter new title', title);
        if (newTitle) {
            dispatch({
                type: "EDIT_TITLE",
                folderId: id,
                title: newTitle
            })
        }
    }

    return (
        <div className="tasks">
            <div className="tasks__top">
                <h2 className="tasks__title" style={{color: props.folder.color.hex}}>{props.folder.title}</h2>
                <img src={editSvg} alt="edit" onClick={() => {
                    editTitle(props.folder.id, props.folder.title);
                }}/>
            </div>
            <div className="tasks__items">
                {
                    props.folder.tasks && props.folder.tasks.map(task => (
                        <Task task={task} folderId={props.folder.id} key={task.id}/>
                    ))
                }
            </div>
            <TasksForm folderId={props.folder.id}/>
        </div>
    );
}

export default Tasks;
