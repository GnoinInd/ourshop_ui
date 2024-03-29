// wishlistReducer.js
const initialState = {
    items: [],
};

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            console.log(state.items)
            const existingItem = state.items.find(item => item._id === action.payload._id);
            if (existingItem) {  
                return state;
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload}],
                };
            }

        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id),
                
            };

        default:
            return state;
    }
};

export default wishlistReducer;
