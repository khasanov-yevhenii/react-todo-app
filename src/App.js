import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";

import listSvg from './assets/images/list.svg';
import greenSvg from './assets/images/green.svg';


function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <Sidebar items={[
                    {
                        icon: listSvg,
                        title: 'All tasks',
                        active: false
                    }
                ]}/>
                <Sidebar items={[
                    {
                        icon: greenSvg,
                        title: 'Lessons',
                        active: true
                    },
                    {
                        icon: greenSvg,
                        title: 'Game',
                        active: true
                    },
                    {
                        icon: greenSvg,
                        title: 'Work',
                        active: false
                    }
                ]}/>
            </div>
            <div className="todo__main">
                m
            </div>
        </div>
    );
}

export default App;
