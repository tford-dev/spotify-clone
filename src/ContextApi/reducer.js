//Initially, everything is empty
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Change back to null later
    // token: 'vi9uoivmij00m7f8m6m65y2vi',
    token: null,
    songName: null,
    songImg: null,
    songArtists: null,
    activeIndex: null
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
            };
        case 'SET_PLAY':
            return {
                ...state,
                songName: action.songName,
                songImg: action.songImg,
                songArtists: action.songArtists
            }
        case 'SET_ACTIVE':
            return {
                ...state, 
                activeIndex: action.activeIndex
            }

        default:
            return state;
    }
};