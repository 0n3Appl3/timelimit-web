const Game = require("../models/game");

exports.getLatestTimeline = async (req, res) => {
    const game = await Game.findOne({
        order: [
            ['id', 'DESC'],
        ],
    })
    if (!game) {
        return res.status(404).json({
            status: 'Fail',
            message: 'No results found'
        })
    }
    res.status(200).json(JSON.parse(game.timeline))
};

exports.getTimelineById = async (req, res) => {
    try {
        const game = await Game.findOne({
            where: {
                id: req.params.id,
            }
        })
        if (!game) {
            return res.status(404).json({
                status: 'Fail',
                message: 'No results found'
            })
        }
        res.status(200).json(JSON.parse(game.timeline))
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
};