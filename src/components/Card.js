export const Card = (props) => {
  // console.log(props)
  return (
    <div className="card column">
      <img className="card-img" src={props.src} alt={props.name} />
      <div className="card-text">{props.album}</div>
      {/* <div className="card-text">{props.name}</div> */}
    </div>
  )
}
