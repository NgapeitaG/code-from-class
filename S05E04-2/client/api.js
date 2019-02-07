import request from 'superagent'

const swapiUrl = 'http://localhost:3000/swapi'

export function getPerson (id) {
  return request
    .get(`${swapiUrl}/people/${id}`)
    .then(res => {
      return res.body
    })
}
