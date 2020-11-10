import React, {useState} from "react";
import Folders from "./components/Folders/Folders";
import AddButton from "./components/AddButton/AddButton";
import AllTasks from "./components/AllTasks/AllTasks";
import Main from "./components/Main/Main";


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
        active: true,
        tasks: [
            {
                id: 1,
                folderId: 1,
                content: 'Изучить JavaScript',
                completed: false
            },
            {
                id: 2,
                folderId: 1,
                content: 'Изучить паттерны проектирования',
                completed: true
            }
        ]
    },
    {
        id: 2,
        title: 'Games',
        colorId: 6,
        active: false,
        tasks: [
            {
                id: 3,
                folderId: 2,
                content: 'Пройт КаЭс',
                completed: false
            }
        ]
    },
    {
        id: 3,
        title: 'Shop',
        colorId: 3,
        active: false,
        tasks: [
            {
                id: 4,
                folderId: 3,
                content: 'Изучить Джаэс',
                completed: false
            }
        ]
    }
]

function App() {
    const [folders, setFolders] = useState(
        baseFolders.map(item => {
            item.color = colors.filter(color => color.id === item.colorId)[0].name;
            return item;
        }));
    const [activeItem, setActiveItem] = useState(baseFolders[0]);

    const onCreateFolder = (obj) => {
        const newFolders = [...folders, obj];
        setFolders(newFolders);
    }

    const onRemoveFolder = (id) => {
        const newFolders = folders.filter(folder => folder.id !== id);
        setFolders(newFolders);
    }

    const onActiveItem = (item) => {
        setActiveItem(item);
    }

    const onEditTitle = (id, title) => {
        const newFolders = folders.map(folder => {
            if (folder.id === id) {
                folder.title = title;
            }
            return folder;
        });
        setFolders(newFolders);
    }

    const onCreateTask = (folderId, newTask) => {
        const newFolders = folders.map(folder => {
            if (folder.id === folderId) {
                folder.tasks = [...folder.tasks, newTask];
            }
            return folder;
        })
        setFolders(newFolders);
    }

    return (
        <div className="todo">
            <div className="todo__sidebar">
                <AllTasks/>
                <Folders folders={folders} activeItem={activeItem} onActiveItem={onActiveItem}
                         onRemoveFolder={onRemoveFolder}/>
                <AddButton onCreateFolder={onCreateFolder}/>
            </div>
            {activeItem && <Main folder={activeItem} onEditTitle={onEditTitle} onCreateTask={onCreateTask}/>}
        </div>
    );
}

export default App;
