import React, { useEffect, useState } from 'react'
import Login from './Components/Login';
import Player from './Components/Player';
import {getTokenFromResponse} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
//Allows App component to have access to state
import { useStateValue } from './ContextApi/StateProvider';
import './App.css';

//Responsible for any interaction between app and spotify API
const spotify = new SpotifyWebApi();
function App() {
	const [{ user, token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		//"hides" access token from url... resets it 
		window.location.hash = "";
		//underscore added to variable because this instance of token is more temporary
		const _token = hash.access_token;

		if(_token){
			//passes token to spotify API so App has permission for requests
			spotify.setAccessToken(_token);

			dispatch({
				type: "SET_TOKEN",
				token: _token,
			})

			dispatch({
				type: "SET_ACTIVE",
				activeIndex: 0
			})

			//Test to see if App is authorized
			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user: user
				});
			});

			//Grabs playlists from API and dispatches them to state
			spotify.getUserPlaylists().then((playlists)=> {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});

			spotify.getPlaylist('37i9dQZF1DX91oIci4su1D').then(response =>{
				dispatch({
					type: "SET_ON_REPEAT",
					on_repeat: response,
				});

				dispatch({
					type: 'SET_PLAY',
					songName: response.tracks.items[0].track.name,
					songImg: response.tracks.items[0].track.album.images[0].url,
					songArtists: response.tracks.items[0].track.artists[0].name
					// songArtists: response.tracks.items[0].track.artists.map((artist) => artist.name).join(", ") -" "
				});
			});
		};
	}, [])

	return (
		<div className="App">
			{
				//ternary conditional for rendering based off of token's state
				token ? (
					//Passes spotify API as an argument
					<Player spotify={spotify} />
				) : (
					<Login />
				)
			}

		</div>
	);
}

export default App;
