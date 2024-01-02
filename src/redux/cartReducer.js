const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,

                    items: state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            }
        case 'INCREASE_CART_ITEM_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case 'DECREASE_CART_ITEM_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default cartReducer;