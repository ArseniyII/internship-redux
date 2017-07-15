
    function matrix(state = [], action) {
            switch (action.type) {
                case 'ADD_TODO':
                    return [
                        ...state,
                        {
                            text: action.text,
                            completed: false
                        }
                    ];
                case 'COMPLETE_TODO':
                    return state.map((todo, index) => {
                        if (index = action.index) {
                            {
                                ...state[index],
                                completed: true
                            }
                        }
                        return todo;
                    });
                default:
                    return state;
            }
        }





