import React, {useState} from "react";

import addSvg from "./../../../../assets/images/add.svg";
import "./TasksForm.scss";


const TasksForm = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleVisibilityForm = () => {
        setInputValue('');
        setOpenForm(!openForm);
    }

    const createTask = () => {
        const task = {
            id: Math.random(),
            folderId: props.folderId,
            content: inputValue,
            completed: false
        }
        props.onCreateTask(props.folderId, task);
        toggleVisibilityForm();
    }

    return (
        <div className="tasks__form">
            {
                openForm ? (
                    <div className="tasks__form_open">
                        <input className="tasks__form-field" type="text" value={inputValue}
                               onChange={event => setInputValue(event.target.value)}
                               placeholder="Enter name of task"/>
                        <button className="tasks__form-add" onClick={createTask} disabled={!inputValue}>
                            Create task
                        </button>
                        <button className="tasks__form-back" onClick={toggleVisibilityForm}>
                            Back
                        </button>
                    </div>
                ) : (
                    <div className="tasks__form_close" onClick={toggleVisibilityForm}>
                        <img src={addSvg} alt="add"/>
                        <span>New task</span>
                    </div>
                )
            }
        </div>
    );
}

export default TasksForm;
