let store = {
    folders: [
        {
            id: 1,
            title: 'Test folder',
            color: {
                id: 7,
                name: 'cyan',
                hex: '#abd7eb'
            },
            tasks: [
                {
                    id: 1,
                    folderId: 1,
                    content: 'Test task',
                    completed: false
                }
            ]
        }
    ],
    colors: [
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
    ],
    activeItem: null
}

export default store;
