import axios from 'axios'
import express from 'express'
import { getValue, setValue } from './cache'

const router = express.Router()

const getPokemonMoves = async (pokemon) => {
  const cached = await getValue(pokemon)
  if (cached) return JSON.parse(cached)
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).catch(() => Promise.resolve({ data: {} }))
  await setValue(pokemon, JSON.stringify(data.moves), 200)
  return data.moves
}

router.get('/pokemon/:name/moves', async (request, response) => {
  const res = await getPokemonMoves(request.params.name)
  response.json(res)
})

export default router
