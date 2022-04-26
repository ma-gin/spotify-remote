import "./App.css"
import Player from "./components/Player"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"
import Search from "./components/Search"
import NotFound from "./components/NotFound"
import Login from "./views/login/Login"
import { useEffect } from "react"
import { getAccessToken } from "./spotify"

const App = () => {
  useEffect(() => {
    const token = getAccessToken()
    console.log(token)
  }, [])

  return (
    <div className="App">
      <Login />
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
