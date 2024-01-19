const db = require("../db/dbConfig");

// GET	/api/raffles
const getAllRaffles = async () => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles");
        return allRaffles;
    } catch (err) {
        return err;
    }
}

// GET	/api/raffles/:id
const getOneRaffleById = async (id) => {
    try {
        const oneRaffleById = await db.oneOrNone("SELECT * FROM raffles WHERE id=$1", id);
        return oneRaffleById;
    } catch (err) {
        return err;
    }
}

// 	POST	/api/raffles
const createNewRaffle = async (raffle) => {
    const { name, secret_token } = raffle;
    try {
        const newRaffle = await db.one(
            "INSERT INTO raffles (name, secret_token) VALUES ($1, $2) RETURNING *",
            [name, secret_token]
        );
        return newRaffle;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllRaffles,
    getOneRaffleById,
    createNewRaffle
};