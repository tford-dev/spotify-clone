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

			//Test to see if App is authorized
			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user: user
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
