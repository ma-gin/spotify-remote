import Navigation from "./Navigation"
import Sidebar from "./Sidebar"

const SearchContent = () => {
  return <h1>Hello Search</h1>
}

export default function Search() {
  return (
    <div className="display">
      <Sidebar />
      <div className="content">
        <Navigation />
        <SearchContent />
      </div>
    </div>
  )
}
