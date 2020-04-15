import request from 'superagent'


const baseUrl = 'https://www.potterapi.com/v1'
const key = "$2a$10$UUyib2sMSrDoU0z1TxOqT.Vahk6c7ViTGJUVxQ5c/VpVmIpBgbh.."
const sortingHat = '/sortingHat'
const houses = '/houses'
const characters = '/characters'

// const spells = '/spells'


export function getSortingHat() {
  return request
    // .set('Authorization', 'Bearer ' + key) // If you need an auth header use .set
    .get(baseUrl + sortingHat)
    .then(res => res.body)
}

export function getHouses() {
    return request
    .get(baseUrl + houses)
    .query('key=' + key)
    .then(res => res.body)
}

export function getCharacterById (characterId) {
    return request
    .get(baseUrl + characters + '/' + characterId)
    .query('key=' + key)
    .then(res => res.body)
}