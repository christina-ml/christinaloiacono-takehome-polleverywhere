const express = require("express");
const winners = express.Router({ mergeParams: true });

const {
    getAllWinnersByRaffleId,
    updateRaffleWinner
} = require('../queries/winners');

const {
    getAllParticipantsByRaffleId
} = require('../queries/participants');

// GET	/api/raffles/:id/winner
// get ALL by raffle ID, but should only be 1 winner.
winners.get('/', async (req, res) => {
    const { raffleId } = req.params;
   
    try {
        const allWinnersByRaffleId = await getAllWinnersByRaffleId(raffleId);
        if (allWinnersByRaffleId[0]){
            res.status(200).json(allWinnersByRaffleId);
        } else {
            res.status(500).json({ message: `There are no winners for raffle id ${raffleId}` });
        }
    } catch (err){
        console.log(err);
    }
})

// PUT	/api/raffles/:id/winner
// Pick a winner from the participants at random for a raffle
// { "secret_token": "s3CrE7" }
// PUT	/api/raffles/:id/winner
winners.put('/', async (req, res) => {
    const { raffleId } = req.params;
    console.log('raffleId ==>', raffleId)
    try {
        // query list of raflle participants to use for randomWinnerId fn
        const participants = await getAllParticipantsByRaffleId(raffleId);
        console.log('participants =>', participants);
        // console.log('numberOfParticipants =>', participants.length);

        // check if there are participants in the raffle
        if (participants.length >= 1){
            // randomizes random winner out of raffles participants list and uses its id
            const randomWinnerId = participants[Math.floor(Math.random() * participants.length)].id;
            console.log('randomWinnerId =>', randomWinnerId);

            // query to check if raffle has a winner
            const winner = await getAllWinnersByRaffleId(raffleId);
            console.log('winners =>', winner);

            // if no winner has been chosen for this raffle, run query to update winners table with a PUT request.
            if (!winner[0]?.winner_id){
                const randomRaffleWinner = await updateRaffleWinner(randomWinnerId, raffleId);
                console.log('randomRaffleWinner =>', randomRaffleWinner)
                res.status(200).json(randomRaffleWinner);
            } else {
                res.status(500).json({ error: `Error: Raffle winner could not be updated - Raffle id ${raffleId} already has a winner.` });
            }
        } else {
            res.status(500).json({ error: `Error: There are no participants for raffle id ${raffleId}` });
        }
    } catch (err){
        console.log(err);
    }
})

module.exports = winners;