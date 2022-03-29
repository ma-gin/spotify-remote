export default function Card(props) {
  return (
    <div className="card column">
      <img className="card-img" src={props.src} alt={props.name} />
      <div className="card-text">{props.album}</div>
      <PlayBtn />
    </div>
  )
}

const PlayBtn = () => {
  return (
    <div className="card-play-btn">
      <div className="play-btn-icon"></div>
    </div>
  )
}
