import "./App.css"
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
  const [{ user, token }, dispatch] = useStateLayerValue()
  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        })
      })
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              (token && <Home spotify={spotify} />) || (!token && <Login />)
            }
          />
          <Route path="/artist" element={<Artist />} />
          <Route path="/album" element={<Album />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
