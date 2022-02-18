import Sidebar from "./Sidebar"
import Navigation from "./Navigation"

const ArtistContent = () => {
  return <h1>Hello Artist</h1>
}

export default function Artist() {
  return (
    <div className="display">
      <Sidebar />
      <div className="content">
        <Navigation />
        <ArtistContent />
      </div>
    </div>
  )
}
