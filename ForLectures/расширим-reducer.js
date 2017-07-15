const initialState = {
    temperature: 0,
    temperatureType: 'Сelsius'
};

const reducer = (state = {temperature: 0, temperatureType: 'Сelsius'}, action) => {
    switch (action.type) {
        case 'CHANGETEMPERATURE':
            return {
                temperature: action.temperature,
                temperatureType: action.temperatureType
            };
        default:
            return state;
    }
};