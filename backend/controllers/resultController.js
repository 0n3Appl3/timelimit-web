const Game = require('../models/game');
const Stat = require('../models/stat');

exports.getLatestResult = async (req, res) => {
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
    const result = await Stat.findAll({
        where: {
            gameId: game.id,
        }
    })
    res.status(200).json(result)
};

exports.getResultById = async (req, res) => {
    try {
        const game = await Game.findOne({
            where: {
                id: req.params.id,
            }
        })
        const result = await Stat.findAll({
            where: {
                gameId: game.id,
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
};

exports.createResult = async (req, res) => {
    try {
        const game = await Game.create({
            date: req.body.date,
            timeline: req.body.timeline,
        })
        req.body.users.forEach(async (u) => {
            const stat = await Stat.create({
                gameId: game.id,
                user: u.name,
                kills: u.kills,
                deaths: u.deaths,
                blocksCollected: u.blocksCollected,
                timeLeft: u.timeLeft,
            })
        })
        res.status(201).json({
            status: 'Created',
            message: 'Game results created successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'Bad Request',
            message: error.message,
        })
    }
};