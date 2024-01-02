export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};
export const increaseCartItemQuantity = (product) => {
    return {
        type: 'INCREASE_CART_ITEM_QUANTITY',
        payload: product,
    };
};

export const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    };
};

export const DecreaseCart = (product) => {
    return {
        type: 'DECREASE_CART_ITEM_QUANTITY',
        payload: product,
    };
};



