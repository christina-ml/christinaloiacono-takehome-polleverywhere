const db = require("../db/dbConfig");

// GET	/api/raffles/:id/participants
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

// POST	/api/raffles/:id/participants
const signUpOneParticipantByRaffleId = async (raffle_id, participants) => {
    const {firstname, lastname, email, phone } = participants;
    try {
        const participantSignUpForRaffleId = await db.one(
            "INSERT INTO participants (firstname, lastname, email, phone, raffle_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
            [
                firstname,
                lastname,
                email,
                phone,
                raffle_id
            ]
        );
        return participantSignUpForRaffleId;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllParticipantsByRaffleId,
    signUpOneParticipantByRaffleId
};