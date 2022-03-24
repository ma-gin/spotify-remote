import { HomeSection } from "./HomeSection"

const HomeTop = () => {
  return <h1>Hello Home Top</h1>
}

export default function HomeComponent() {
  return (
    <div className="column">
      <HomeTop />
      <HomeSection artist={"the+doors"} />
      <HomeSection artist={"pink+floyd"} />
      <HomeSection artist={"snak+the+ripper"} />
    </div>
  )
}
