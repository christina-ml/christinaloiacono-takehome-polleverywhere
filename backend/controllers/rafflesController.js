const express = require("express");
const raffles = express.Router();

const {
    getAllRaffles
} = require('../queries/raffles');

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

module.exports = raffles;