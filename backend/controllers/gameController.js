const Game = require('../models/game');

exports.getAllGames = async (req, res) => {
    const result = await Game.findAll()

    if (!result) {
        return res.status(404).json({
            status: 'Fail',
            message: 'No results found'
        })
    }
    res.status(200).json(result)
};