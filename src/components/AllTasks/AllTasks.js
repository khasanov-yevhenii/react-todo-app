import {useContext} from "react";
import {useHistory} from "react-router-dom";
import listSvg from "./../../assets/images/list.svg";
import {Context} from "../../context/context";

const AllTasks = () => {
    const {state, dispatch} = useContext(Context);
    let history = useHistory();

    const handleActiveItem = () => {
        history.push("/");
        dispatch({
            type: "SET_ACTIVE_ITEM",
            payload: {}
        })
    }

    return (
        <ul className="todo__items">
            <li className={!state.activeItem ? "active" : null} onClick={handleActiveItem}>
                <i>
                    <img src={listSvg} alt="list"/>
                </i>
                <span>All tasks</span>
            </li>
        </ul>
    );
}

export default AllTasks;
