export const addToOrder = (product) => {
    return {
        type: 'ADD_TO_ORDER',
        payload: product,
    };
};