import { HomeSection } from "./HomeSection"

const HomeTop = () => {
  return <h1>Hello Home Top</h1>
}

export default function HomeComponent() {
  return (
    <div className="column">
      <HomeTop />
      <HomeSection artist={"eminem"} />
      <HomeSection artist={"pink+floyd"} />
      <HomeSection artist={"queen"} />
    </div>
  )
}
