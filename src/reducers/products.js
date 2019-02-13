var initialState = [
    {
        id: 1,
        name: 'apple',
        price: 300,
        status: false
    },
    {
        id: 2,
        name: 'apple',
        price: 300,
        status: true
    },
    {
        id: 3,
        name: 'apple',
        price: 300,
        status: false
    }

];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default products;
