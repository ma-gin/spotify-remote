import { useState, useEffect } from "react"
import { Song } from "./Song"

export const HomeSection = ({ artist }) => {
  const [name, setData] = useState("")
  const [album, setAlbum] = useState({})

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
        console.log(data)
        const name = data.data[0].artist.name
        const album = data.data[0].album

        setData(name)
        setAlbum(album)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArtist()
  }, [artist])

  return (
    <div className="column">
      <h1>{name}</h1>
      <div className="flex">
        <Song src={album.cover} album={album.title} />
      </div>
    </div>
  )
}
