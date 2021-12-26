//Initially, everything is empty
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                //Without spread operator + state, state would be overided
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;