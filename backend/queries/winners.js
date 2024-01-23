const db = require("../db/dbConfig");

// GET	/api/raffles/:id/participants
const getAllWinnersByRaffleId = async (raffle_id) => {
    try {
        const allWinnersByRaffleId = await db.any(
            "SELECT winner_id FROM winners WHERE raffle_id=$1", 
            raffle_id
        );
        return allWinnersByRaffleId;
    } catch (err) {
        return err;
    }
}

// PUT	/api/raffles/:id/winner
const updateRaffleWinner = async (winner_id, raffleId) => {
    try {
        const result = await db.result(
            "UPDATE winners SET winner_id=$1 WHERE raffle_id=$2 RETURNING *",
            [winner_id, raffleId]
        );

        if (result.rowCount > 0) {
            // Update was successful, get the updated data
            const updatedRaffleWinner = result.rows[0];
            return updatedRaffleWinner;
        } else {
            // Add winner to winners table, instead of updating non-existing raffleId within the winners table which causes a postgres error
            const newWinner = await db.one(
                "INSERT INTO winners(raffle_id, winner_id) VALUES ($1, $2) RETURNING *",
                [raffleId, winner_id]
            );
            return newWinner;
        }
    } catch (error) {
        console.error("Error updating raffle winner:", error);
        throw error;
    }
};

module.exports = {
    getAllWinnersByRaffleId,
    updateRaffleWinner
};