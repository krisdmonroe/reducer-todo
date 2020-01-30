

export const initialState = [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now(),
        }
];

export const ToDoReducer = (state, action) => {
    switch(action.type){
        case `ADD-TODO`:
            return [...state, 
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
            case `DELETE-TODO`:
                return state.filter(e => !e.completed)
            case "COMPLETED":
                return state.map(e => e.id === action.id ? { ...e, completed: !e.completed } : e);
            default:
                    return state
    }

}



