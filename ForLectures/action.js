const store = {
    dispatch() {
        return 'You cant see me'
    }
};


    const action = {
        type: 'COMPLETE_TODO',
        index: 1
    };

    store.dispatch(action);