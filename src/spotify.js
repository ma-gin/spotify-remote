export const authentication = "https://accounts.spotify.com/authorize"

const redirect = process.env.REACT_APP_REDIRECT

const clientID = process.env.REACT_APP_CLIENT_ID

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-modify-playback-state",
]

export const loginURL = `${authentication}?client_id=${clientID}&redirect_uri=${redirect}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`

export const getAccessToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((a, b) => {
      let item = b.split("=")
      a[item[0]] = decodeURIComponent(item[1])
      return a
    }, {})
}
