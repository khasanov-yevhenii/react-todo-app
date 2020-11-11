import React, {useState} from "react";

import "./AddButtonPopup.scss";
import closeSvg from './../../../assets/images/close.svg';

const AddButtonPopup = (props) => {
    const [folderName, setFolderName] = useState('');
    const [selectedColor, selectColor] = useState('#7d3865');

    const createFolder = () => {
        props.onCreateFolder({
            id: Math.random(),
            title: folderName,
            color: selectedColor
        })
        props.setOpenPopup(false);
    }

    return (
        <div className="add-folder__popup">
            <img className="close" src={closeSvg} onClick={() => {
                props.setOpenPopup(false);
            }} alt="close"/>
            <input className="add-folder__field" type="text" value={folderName}
                   onChange={event => {
                       setFolderName(event.target.value);
                   }} placeholder="Enter name of folder"/>
            <div className="add-folder__colors">
                <ul>
                    {
                        props.colors.map(color => (
                            <li className={selectedColor === color ? "badge active" : "badge"}
                                style={{backgroundColor: color.hex}}
                                onClick={() => {
                                    selectColor(color);
                                }} key={color.id}/>
                        ))
                    }
                </ul>
            </div>
            <button className="add-folder__button" disabled={!folderName} onClick={createFolder}>Create folder</button>
        </div>
    );
}

export default AddButtonPopup;
