import { HomeIcon, SearchIcon, LibraryIcon } from "./Icons"
import { Link } from "react-router-dom"

const Logo = () => (
  <Link to="/">
    <img
      id="logo"
      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
      alt="spotify logo"
    />
  </Link>
)

// const SideNav = () => {
//   return (
//     <div className="side-nav">
//       <Link className="side-nav-item" to="/">
//         <HomeIcon />
//         <div>Home</div>
//       </Link>
//       <Link className="side-nav-item" to="/search">
//         <SearchIcon />
//         <div>Search</div>
//       </Link>
//       <Link className="side-nav-item" to="/artist">
//         <LibraryIcon />
//         <div>Library</div>
//       </Link>
//     </div>
//   )
// }

// const PlaylistContainer = () => (
//   <>
//     <div className="playlist-title side-nav-item">Example Playlist</div>
//     <div className="playlist-title side-nav-item">Example Playlist</div>
//     <div className="playlist-title side-nav-item">Example Playlist</div>
//     <div className="playlist-title side-nav-item">Example Playlist</div>
//     <div className="playlist-title side-nav-item">Example Playlist</div>
//   </>
// )

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      {/* <SideNav /> */}
      <div className="hr"></div>
      {/* <PlaylistContainer /> */}
    </div>
  )
}
