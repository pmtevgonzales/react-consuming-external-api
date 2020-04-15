import request from 'superagent'

// const baseUrl = 'https://api.wheretheiss.at/v1/satellites/25544?key=123'
const baseUrl = 'https://www.potterapi.com/v1'
const key = "$2a$10$UUyib2sMSrDoU0z1TxOqT.Vahk6c7ViTGJUVxQ5c/VpVmIpBgbh.."
const sortingHat = '/sortingHat'
const characters = '/characters'
// const houses = '/houses'
// const spells = '/spells'


export function getSortingHat() {
  return request
    // .set('Authorization', 'Bearer ' + key) // If you need an auth header use .set
    .get(baseUrl + sortingHat)
    .then(res => res.body)
}

// export function getCharacters() {
//     return request
//     .get(baseUrl + characters)
//     .query('key=' + key)
//     .then(res => res.body)
// }