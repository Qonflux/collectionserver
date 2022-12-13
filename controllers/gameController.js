const asyncHandler = require('express-async-handler')
const path = require('path')
const Game = require(path.join(__dirname, '../models/gameModel'))

// @desc    Get games
// @route   GET /api/games
// @access  Private
const getGames = asyncHandler(async (req, res) => {
  let games = await Game.find()
  games = games.reverse()  

  res.status(200).json(games) 
})

// @desc    Set games
// @route   GET /api/games
// @access  Private
const setGame = asyncHandler(async (req, res) => {
  if (!req.body.igdbId) {
    res.status(400)
    throw new Error('Geen game meegestuurd')
  }

  const game = await Game.create({
    completed: req.body.completed,
    cover: req.body.cover,
    genres: req.body.genres,
    idgbId: req.body.igdbId,
    name: req.body.name,
    platform: req.body.platform,
    releaseDate: req.body.releaseDate
  })

  res.status(200).json(game)
})

// @desc    Update game
// @route   PUT /api/games/:id
// @access  Private
const updateGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)

  if (!game) {
    res.status(400)
    throw new Error('Game niet gevonden')
  }

  const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json(updatedGame)
})

// @desc    Delete game
// @route   DELETE /api/games/:id
// @access  Private
const deleteGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)

  if (!game) {
    res.status(400)
    throw new Error('Game niet gevonden')
  }

  await game.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGames,
  setGame,
  updateGame,
  deleteGame
}