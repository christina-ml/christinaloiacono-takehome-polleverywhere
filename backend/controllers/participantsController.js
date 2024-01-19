const express = require("express");
const participants = express.Router({ mergeParams: true });

const {
    getAllParticipantsByRaffleId,
    signUpOneParticipantByRaffleId
} = require('../queries/participants');

// GET	/api/raffles/:id/participants
participants.get('/', async (req, res) => {
    const { raffleId } = req.params;

    try {
        const allParticipantsByRaffleId = await getAllParticipantsByRaffleId(raffleId);
        if (allParticipantsByRaffleId[0]){
            res.status(200).json(allParticipantsByRaffleId);
        } else {
            res.status(500).json({ error: `Error: there are no participants for raffle id ${raffleId}` });
        }
    } catch (err){
        console.log(err);
    }
})

// POST	/api/raffles/:id/participants
participants.post('/', async (req, res) => {
    const { raffleId } = req.params;
    const { body } = req;

    try {
        const signedUpOneParticipantByRaffleId = await signUpOneParticipantByRaffleId(raffleId, body);
        if (signedUpOneParticipantByRaffleId){
            res.status(200).json(signedUpOneParticipantByRaffleId);
        } else {
            res.status(500).json({ error: `Error: participant cannot sign up for raffle id ${raffleId}` });
        }
    } catch (err){
        console.log(err);
    }
})

module.exports = participants;