import "./App.css"
import Player from "./components/Player"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"
import Search from "./components/Search"
import NotFound from "./components/NotFound"
import Login from "./views/login/Login"
import { useEffect, useState } from "react"
import { getAccessToken } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import { useStateLayerValue } from "./components/StateLayer"

const spotify = new SpotifyWebApi()

const App = () => {
  const [token, setToken] = useState(null)
  const [{ user }, dispatch] = useStateLayerValue()
  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        })
      })
    }
  }, [])

  console.log(user)

  return (
    <div className="App">
      {token && <Home />}
      {!token && <Login />}
    </div>
    // <BrowserRouter>
    //   <Login />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/artist" element={<Artist />} />
    //     <Route path="/album" element={<Album />} />
    //     <Route path="/search" element={<Search />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    //   <Player />
    // </BrowserRouter>
  )
}

export default App
