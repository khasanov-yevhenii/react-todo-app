import React from "react";

import "./AddButtonPopup.scss";


const AddButtonPopup = () => {
    return (
        <div className="add-folder__popup">
            <input className="add-folder__field" type="text" placeholder="Enter name of folder"/>
            <div className="add-folder__colors">
                <ul>
                    <li className="badge red"/>
                    <li className="badge green"/>
                    <li className="badge pink"/>
                    <li className="badge yellow"/>
                    <li className="badge blue"/>
                    <li className="badge"/>
                    <li className="badge"/>
                    <li className="badge"/>
                </ul>
            </div>
            <button className="add-folder__button">Create folder</button>
        </div>
    );
}

export default AddButtonPopup;
