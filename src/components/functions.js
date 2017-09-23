
export function geoLocation() {
  let url = 'https://freegeoip.net/json/'
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.country_code
    })
    .catch((error) => {
      console.error(error)
    })
}