//Initially, everything is empty
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Change back to null later
    // token: 'vi9uoivmij00m7f8m6m65y2vi',
    token: null,
}

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                //Without spread operator + state, state would be overided
                ...state,
                user: action.user
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_ON_REPEAT': 
            return {
                ...state,
                on_repeat: action.on_repeat,
            }

        default:
            return state;
    }
};