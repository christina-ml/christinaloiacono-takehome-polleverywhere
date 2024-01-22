const express = require("express");
const raffles = express.Router();

// nested routes inside rafflesController
const participantsController = require('./participantsController.js');
const winnersController = require('./winnersController.js');
raffles.use("/:raffleId/participants", participantsController);
raffles.use("/:raffleId/winner", winnersController);

const {
    getAllRaffles,
    getOneRaffleById,
    createNewRaffle,
} = require('../queries/raffles');

// GET	/api/raffles
raffles.get('/', async (req, res) => {
    try {
        const allRaffles = await getAllRaffles();
        if (allRaffles[0]){
            res.status(200).json(allRaffles);
        } else {
            res.status(500).json({ error: "Error: there are no raffles" });
        }
    } catch (err){
        console.log(err);
    }
})

// GET	/api/raffles/:id
raffles.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const oneRaffle = await getOneRaffleById(id);
        if (oneRaffle.id){
            res.status(200).json(oneRaffle);
        } else {
            res.status(500).json({ error: `Error: Raffle with id ${id} not found.` });
        }
    } catch (err){
        console.log(err);
    }
})

// 	POST	/api/raffles
raffles.post('/', async (req, res) => {
    const { body } = req;
    try {
        const newRaffle = await createNewRaffle(body);
        if (newRaffle.id){
            res.status(200).json(newRaffle);
        } else {
            res.status(500).json({ error: "Error: new raffle could not be created" });
        }
    } catch (err){
        console.log(err);
    }
})

module.exports = raffles;