import React, {useState} from "react";
import Folders from "./components/Folders/Folders";

import listSvg from "./assets/images/list.svg";
import AddButton from "./components/AddButton/AddButton";
import AllTasks from "./components/AllTasks/AllTasks";


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
    }
]

const baseFolders = [
    {
        id: 1,
        title: 'Lessons',
        colorId: 7,
        active: true
    },
    {
        id: 1,
        title: 'Games',
        colorId: 6,
        active: false
    },
    {
        id: 1,
        title: 'Shop',
        colorId: 3,
        active: true
    }
]

function App() {
    const [folders, setFolders] = useState(baseFolders.map(item => {
        item.color = colors.filter(color => color.id === item.colorId)[0].name;
        return item;
    }));

    const onCreateFolder = (obj) => {
        const newFolders = [...folders, obj];
        setFolders(newFolders);
    }

    return (
        <div className="todo">
            <div className="todo__sidebar">
                <AllTasks items={[
                    {
                        icon: listSvg,
                        title: "All tasks",
                        active: false
                    }
                ]}/>
                <Folders items={folders}/>
                <AddButton onCreateFolder={onCreateFolder}/>
            </div>
            <div className="todo__main">
                m
            </div>
        </div>
    );
}

export default App;
