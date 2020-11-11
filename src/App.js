import React, {useEffect, useState} from "react";
import Folders from "./components/Folders/Folders";
import AddButton from "./components/AddButton/AddButton";
import AllTasks from "./components/AllTasks/AllTasks";
import Main from "./components/Main/Main";
import {useHistory, useLocation} from "react-router-dom";


const colors = [
    {
        id: 1,
        name: 'red',
        hex: '#7d3865'
    },
    {
        id: 2,
        name: 'blue',
        hex: '#6497C4'
    },
    {
        id: 3,
        name: 'khaki',
        hex: '#acc38b'
    },
    {
        id: 4,
        name: 'pink',
        hex: '#f0cac4'
    },
    {
        id: 5,
        name: 'green',
        hex: '#2c9a8e'
    },
    {
        id: 6,
        name: 'orange',
        hex: '#f8b703'
    },
    {
        id: 7,
        name: 'cyan',
        hex: '#abd7eb'
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
            },
            {
                id: 4,
                folderId: 3,
                content: 'Изучить ython',
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
                id: 5,
                folderId: 3,
                content: 'Изучить Джаэс',
                completed: true
            }
        ]
    }
]

function App() {
    const [folders, setFolders] = useState(
        baseFolders.map(folder => {
            folder.color = colors.filter(color => color.id === folder.colorId)[0];
            return folder;
        }));
    const [activeItem, setActiveItem] = useState(null);
    let history = useHistory();
    let location = useLocation();

    const onCreateFolder = (obj) => {
        const newFolders = [...folders, obj];
        setFolders(newFolders);
    }

    const onRemoveFolder = (id) => {
        if (activeItem && activeItem.id === id) {
            history.push("/");
        }
        const newFolders = folders.filter(folder => folder.id !== id);
        setFolders(newFolders);
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

    const onChangeStatus = (folderId, taskId) => {
        const newFolders = folders.map(folder => {
            if (folder.id === folderId) {
                folder.tasks = folder.tasks.map(task => {
                    if (task.id === taskId) {
                        task.completed = !task.completed;
                    }
                    return task;
                });
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
    }, [folders, history.location.pathname, location])

    return (
        <div className="todo">
            <div className="todo__sidebar">
                <AllTasks active={!activeItem} onActiveItem={() => {
                    history.push("/");
                }}/>
                <Folders folders={folders} activeItem={activeItem} onActiveItem={(folder) => {
                    history.push(`/folder/${folder.id}`);
                }} onRemoveFolder={onRemoveFolder}/>
                <AddButton onCreateFolder={onCreateFolder} colors={colors}/>
            </div>
            <Main folders={folders} activeItem={activeItem} onEditTitle={onEditTitle} onCreateTask={onCreateTask}
                  onRemoveTask={onRemoveTask} onChangeStatus={onChangeStatus}/>
        </div>
    );
}

export default App;
