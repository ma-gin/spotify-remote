import { Link } from "react-router-dom"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useStateLayerValue } from "./StateLayer"

export default function Sidebar() {
  const [{ playlists }, dispatch] = useStateLayerValue()
  console.log(playlists)
  console.log(playlists.items)
  return (
    <div className="sidebar">
      <Logo className="side-nav-logo" />
      <div className="side-nav-top">
        <Link to="/">
          <SidebarItem Icon={HomeIcon} title={"Home"} />
        </Link>
        <Link to="/search">
          <SidebarItem Icon={SearchIcon} title={"Search"} />
        </Link>
        <Link to="/">
          <SidebarItem Icon={LibraryMusicIcon} title={"Library"} />
        </Link>
      </div>
      <div className="hr"></div>
      {playlists &&
        playlists.items.map((item, i) => {
          return <SidebarItem key={i} title={item.name} />
        })}
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

const SidebarItem = ({ Icon, title = "" }) => {
  return (
    <div className="side-nav-item">
      {Icon && <Icon className="side-nav-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}
