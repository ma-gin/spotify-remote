import { Link } from "react-router-dom"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <SideTopNav />
      <div className="hr"></div>
      <PlaylistContainer />
    </div>
  )
}

const Logo = () => (
  <Link to="/">
    <img
      id="logo"
      src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
      alt="spotify logo"
    />
  </Link>
)

const SideTopNav = () => {
  return (
    <div className="side-nav">
      <Link className="side-nav-item" to="/">
        <HomeIcon />
        <p>Home</p>
      </Link>
      <Link className="side-nav-item" to="/search">
        <SearchIcon />
        <p>Search</p>
      </Link>
      <Link className="side-nav-item" to="/artist">
        <LibraryMusicIcon />
        <p>Library</p>
      </Link>
    </div>
  )
}

const PlaylistContainer = () => (
  <>
    <div className="playlist-title side-nav-item">Example Playlist</div>
    <div className="playlist-title side-nav-item">Example Playlist</div>
    <div className="playlist-title side-nav-item">Example Playlist</div>
    <div className="playlist-title side-nav-item">Example Playlist</div>
    <div className="playlist-title side-nav-item">Example Playlist</div>
  </>
)
