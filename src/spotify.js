//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
//38bbf18b772444b8b19c7c9b270d341f
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://61ca093d1fd3341567318aff--tford-dev-spotify.netlify.app/#";
//id given by spotify for developers link
const clientId = "38bbf18b772444b8b19c7c9b270d341f";

//Permissions of app from API;
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//pulls access token
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

//loginUrl prompts user to sign in and/or agree to terms and conditions
export const loginUrl = `${authEndpoint}?client_id=${clientId}&
redirect_uri=${redirectUri}&
scope=${scopes.join("%20")}&
response_type=token&
show_dialog=true`;