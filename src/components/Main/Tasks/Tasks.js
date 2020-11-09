import React from "react";

import "./Tasks.scss";
import editSvg from "./../../../assets/images/edit.svg";


const Tasks = () => {
    return (
        <div className="tasks">
            <div className="tasks__top">
                <h2 className="tasks__title">Front-end</h2>
                <img src={editSvg} alt="edit"/>
            </div>
            <div className="tasks__items">
                <div className="tasks__item">
                    <div className="checkbox">
                        <input type="checkbox" id="asd"/>
                        <label htmlFor="asd">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" opacity="0">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B2B2B2"
                                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                    </div>
                    <p className="text">ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
