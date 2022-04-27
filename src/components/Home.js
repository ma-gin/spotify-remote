import Sidebar from "./Sidebar"
import HomeMain from "./HomeMain"
import Player from "./Player"

export default function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Sidebar />
        <HomeMain />
      </div>
      <Player />
    </div>
  )
}
