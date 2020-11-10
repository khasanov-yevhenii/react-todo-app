import React, {useState} from "react";

import editSvg from "./../../../assets/images/edit.svg";
import addSvg from "./../../../assets/images/add.svg";
import "./Tasks.scss";


const Tasks = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const editTitle = (id, title) => {
        const newTitle = window.prompt('Enter new title', title);
        if (newTitle) {
            props.onEditTitle(id, newTitle);
        }
    }

    const toggleVisibilityForm = () => {
        setInputValue('');
        setOpenForm(!openForm);
    }

    const createTask = () => {
        const task = {
            id: Math.random(),
            folderId: props.folder.id,
            content: inputValue,
            completed: false
        }
        props.onCreateTask(props.folder.id, task);
        toggleVisibilityForm();
    }

    return (
        <div className="tasks">
            <div className="tasks__top">
                <h2 className="tasks__title">{props.folder.title}</h2>
                <img src={editSvg} alt="edit" onClick={() => {
                    editTitle(props.folder.id, props.folder.title);
                }}/>
            </div>
            <div className="tasks__items">
                {
                    props.folder.tasks && props.folder.tasks.map(task => (
                        <div className="tasks__item" key={task.id}>
                            <div className="checkbox">
                                <input type="checkbox" id={`task-${task.id}`}/>
                                <label htmlFor={`task-${task.id}`}>
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" opacity="0">
                                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B2B2B2"
                                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </label>
                            </div>
                            <p className="text">{task.content}</p>
                        </div>
                    ))
                }
            </div>

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

        </div>
    );
}

export default Tasks;
