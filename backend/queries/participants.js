const db = require("../db/dbConfig");

const getAllParticipantsByRaffleId = async (raffle_id) => {
    try {
        const allParticipantsByRaffleId = await db.any(
            "SELECT * FROM participants WHERE raffle_id=$1", 
            raffle_id
        );
        return allParticipantsByRaffleId;
    } catch (err) {
        return err;
    }
}


module.exports = {
    getAllParticipantsByRaffleId
};