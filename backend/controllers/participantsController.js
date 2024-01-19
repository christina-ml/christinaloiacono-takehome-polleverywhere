const express = require("express");
const participants = express.Router({ mergeParams: true });

const {
    getAllParticipantsByRaffleId
} = require('../queries/participants');

participants.get('/', async (req, res) => {
    const { raffleId } = req.params;
    
    try {
        const allParticipantsByRaffleId = await getAllParticipantsByRaffleId(raffleId);
        if (allParticipantsByRaffleId[0].id){
            res.status(200).json(allParticipantsByRaffleId);
        } else {
            res.status(500).json({ error: "Error: there are no participants for this raffle id" });
        }
    } catch (err){
        console.log(err);
    }
})


module.exports = participants;