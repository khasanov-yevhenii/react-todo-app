import React from "react";
import Folders from "./Components/Folders/Folders";

import listSvg from "./assets/images/list.svg";
import greenSvg from "./assets/images/green.svg";
import AddButton from "./Components/AddButton/AddButton";


function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <Folders items={[
                    {
                        icon: listSvg,
                        title: "All tasks",
                        active: false
                    }
                ]}/>
                <Folders items={[
                    {
                        icon: greenSvg,
                        title: "Lessons",
                        active: true
                    },
                    {
                        icon: greenSvg,
                        title: "Game",
                        active: true
                    },
                    {
                        icon: greenSvg,
                        title: "Work",
                        active: false
                    }
                ]}/>
                <AddButton/>
            </div>
            <div className="todo__main">
                m
            </div>
        </div>
    );
}

export default App;
