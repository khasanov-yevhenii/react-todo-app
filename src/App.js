import React, {useEffect, useState} from "react";
import Folders from "./components/Folders/Folders";
import AddButton from "./components/AddButton/AddButton";
import AllTasks from "./components/AllTasks/AllTasks";
import Main from "./components/Main/Main";
import {useHistory} from "react-router-dom";


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
    // const [activeItem, setActiveItem] = useState(baseFolders[0]);
    const [activeItem, setActiveItem] = useState(null);
    let history = useHistory();

    const onCreateFolder = (obj) => {
        const newFolders = [...folders, obj];
        setFolders(newFolders);
    }

    const onRemoveFolder = (id) => {
        const newFolders = folders.filter(folder => folder.id !== id);
        setFolders(newFolders);
    }

    const onActiveItem = (item) => {
        history.push(`folder/${item.id}`);
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

    const onRemoveTask = (folderId, taskId) => {
        const newFolders = folders.map(folder => {
            if (folder.id === folderId) {
                folder.tasks = folder.tasks.filter(task => task.id !== taskId);
            }
            return folder;
        });
        setFolders(newFolders);
    }

    const onCreateTask = (folderId, newTask) => {
        const newFolders = folders.map(folder => {
            if (folder.id === folderId) {
                folder.tasks = folder.tasks ? [...folder.tasks, newTask] : [newTask];
            }
            return folder;
        })
        setFolders(newFolders);
    }

    useEffect(() => {
        const folderId = history.location.pathname.split('folder/')[1];
        if (folders) {
            const newActiveItem = folders.find(folder => folder.id === Number(folderId));
            setActiveItem(newActiveItem);
        }
    }, [folders, history.location.pathname])

    return (
        <div className="todo">
            <div className="todo__sidebar">
                <AllTasks onActiveItem={onActiveItem}/>
                <Folders folders={folders} activeItem={activeItem} onActiveItem={onActiveItem}
                         onRemoveFolder={onRemoveFolder}/>
                <AddButton onCreateFolder={onCreateFolder}/>
            </div>
            <Main folders={folders} activeItem={activeItem} onEditTitle={onEditTitle} onCreateTask={onCreateTask}
                  onRemoveTask={onRemoveTask}/>
        </div>
    );
}

export default App;
