import './App.css';
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Artist from './components/Artist'
import Album from './components/Album'
import Search from './components/Search'
import NotFound from './components/NotFound'

const App = () => (
   <div className="App">
     <BrowserRouter>
     	 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       <Sidebar />
      <Display />
      <Player />
     </BrowserRouter></div>)

export default App;



