import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import Player from './components/Player';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './components/context/UserContext';

//to connect to spotify API
const spotify = new SpotifyWebApi();

function App() {

  // let [token, setToken] = useState("");
  const [{user,token},dispatch] = useDataLayerValue();

  useEffect(() => {

    let _token = getTokenFromUrl().access_token;

   

    if (_token) {
      
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })

      spotify.setAccessToken(_token);       // to get the access to spotify
      spotify.getMe().then(user => {       // to get a user
        dispatch({
          type:'SET_USER',
          user
        })
      })
      spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type:"SET_PLAYLIST",
          playlists
        })
      })

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then(discover_weekly=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly
        })
      })
    }

    window.location.hash = "";        //to remove the token code from the url above
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
