// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

// FIND ALL Stages
stages.get('/', async (req, res) => {
    try {
        const foundStage = await Stage.findAll()
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Stage
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Stage
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Stage
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStage} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = stages