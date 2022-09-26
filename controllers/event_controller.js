// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event } = db

// FIND ALL EventS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Event
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { events_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Event
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Event
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                events_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Event
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                events_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = events