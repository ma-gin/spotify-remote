export const Song = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.src} alt={props.album} />
      <div className="card-text">{props.album}</div>
    </div>
  )
}
