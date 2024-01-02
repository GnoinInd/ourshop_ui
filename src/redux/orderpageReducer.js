const initialState = {
    items: [],
};

const OrderpageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_ORDER':
            console.log(state.items)
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {  
                return state;
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload}],
                };
            }
            default:
                return state;
        }
    };
    export default OrderpageReducer;  