const reducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_FOLDER": {
            state.folders = state.folders.filter(folder => folder.id !== action.payload);
            return {...state};
        }
        case "CREATE_FOLDER": {
            state.folders = [...state.folders, action.payload];
            return {...state};
        }
        case "REMOVE_TASK": {
            state.folders = state.folders.map(folder => {
                if (folder.id === action.folderId) {
                    folder.tasks = folder.tasks.filter(task => task.id !== action.taskId);
                }
                return folder;
            });
            return {...state};
        }
        case "CREATE_TASK": {
            state.folders = state.folders.map(folder => {
                if (folder.id === action.folderId) {
                    folder.tasks = folder.tasks ? [...folder.tasks, action.newTask] : [action.newTask];
                }
                return folder;
            });
            return {...state};
        }
        case "CHANGE_STATUS": {
            state.folders = state.folders.map(folder => {
                if (folder.id === action.folderId) {
                    folder.tasks = folder.tasks.map(task => {
                        if (task.id === action.taskId) {
                            task.completed = !task.completed;
                        }
                        return task;
                    });
                }
                return folder;
            });
            return {...state};
        }
        case "EDIT_TITLE": {
            state.folders = state.folders.map(folder => {
                if (folder.id === action.folderId) {
                    folder.title = action.title;
                }
                return folder;
            });
            return {...state};
        }
        case "SET_ACTIVE_ITEM": {
            state.activeItem = action.payload;
            return {...state};
        }
        default:
            return state;
    }
};

export default reducer;
