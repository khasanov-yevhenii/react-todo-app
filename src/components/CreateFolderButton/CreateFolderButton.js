import {useState} from "react";
import plusSvg from './../../assets/images/plus.svg';
import CreateFolderPopup from "./CreateFolderPopup/CreateFolderPopup";

const CreateFolderButton = () => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className="add-folder">
            <ul className="todo__items">
                <li onClick={() => setOpenPopup(true)}>
                    <i>
                        <img src={plusSvg} alt="add-button"/>
                    </i>
                    <span>Add folder</span>
                </li>
            </ul>
            {openPopup && <CreateFolderPopup setOpenPopup={setOpenPopup}/>}
        </div>
    );
}

export default CreateFolderButton;
