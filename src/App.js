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
	const [token, setToken] = useState(null);
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		//"hides" access token from url... resets it 
		window.location.hash = "";
		//underscore added to variable because this instance of token is more temporary
		const _token = hash.access_token;

		if(_token){
			setToken(_token)
			
			//passes token to spotify API so App has permission for requests
			spotify.setAccessToken(_token);

			//Test to see if App is authorized
			spotify.getMe().then((user) => {
				console.log(user);
			})
		};
	}, [])
	return (
		<div className="App">
			{
				//ternary conditional for rendering based off of token's state
				token ? (
					<Player />
				) : (
					<Login />
				)
			}

		</div>
	);
}

export default App;
