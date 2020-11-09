import React, {useState} from "react";

import "./AddButtonPopup.scss";
import closeSvg from './../../../assets/images/close.svg';

const colors = [
    {
        id: 1,
        name: 'red',
        hex: '#B22222'
    },
    {
        id: 2,
        name: 'blue',
        hex: '#191970'
    },
    {
        id: 3,
        name: 'yellow',
        hex: '#D1FD1F'
    },
    {
        id: 4,
        name: 'pink',
        hex: '#EE82EE'
    },
    {
        id: 5,
        name: 'green',
        hex: '#006600'
    },
    {
        id: 6,
        name: 'orange',
        hex: '#EEC900'
    },
    {
        id: 7,
        name: 'cyan',
        hex: '#00CDCD'
    },
]


const AddButtonPopup = (props) => {
    const [folderName, setFolderName] = useState('');
    const [selectedColor, selectColor] = useState('red');

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
                        colors.map(color => (
                            <li className={selectedColor === color.name ? "badge active " + color.name : "badge " + color.name}
                                onClick={() => {
                                    selectColor(color.name);
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
