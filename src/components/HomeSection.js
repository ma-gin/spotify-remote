import { useState, useEffect } from "react"
import Card from "./Card"

export const HomeSection = ({ artist }) => {
  const [data, setData] = useState(null)
  const [name, setName] = useState("")
  // const [album, setAlbum] = useState({})

  // let dataArr

  useEffect(() => {
    const base_url =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q="
    const fetchArtist = async () => {
      try {
        const response = await fetch(base_url + artist, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
            "Content-type": "application/json",
          },
        })
        const data = await response.json()
        // console.log(data)
        const name = data.data[0].artist.name
        // const album = data.data[0].album
        // console.log(data)
        // console.log(data.data)
        // console.log(name)
        // const resp = data.data
        // console.log("resp is" + resp)
        setName(name)
        setData(data)
        // setAlbum(album)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArtist()
  }, [artist])

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  function screenWidthCalc() {
    if (window.screen.availWidth < 600) return 22
    if (window.screen.availWidth < 800) return 24
    return 16
  }

  return (
    <div className="column">
      <h1>{name}</h1>
      <div className="flex display-section">
        {data &&
          shuffle(
            data.data
              .map((album) => (
                <Card
                  key={album.id}
                  src={album.album.cover}
                  name={name}
                  album={album.album.title}></Card>
              ))
              .splice(screenWidthCalc())
          )}
      </div>
    </div>
  )
}
