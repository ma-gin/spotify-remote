import Sidebar from "./Sidebar"
import Navigation from "./Navigation"
import HomeContent from "./HomeContent"

export default function Home() {
  return (
    <div className="display">
      <Sidebar />
      <div className="content">
        <Navigation />
        <HomeContent />
      </div>
    </div>
  )
}
