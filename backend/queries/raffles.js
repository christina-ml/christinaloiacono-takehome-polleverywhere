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
        const oneRaffleById = await db.one("SELECT * FROM raffles WHERE id=$1", id);
        return oneRaffleById;
    } catch (err) {
        return err;
    }
}

// GET	/api/raffles/:id
const getSecretTokenByRaffleId = async (id) => {
    try {
        const secretToken= await db.one("SELECT secret_token FROM raffles WHERE id=$1 ", id);
        return secretToken;
    } catch (err) {
        return err;
    }
}

// 	POST	/api/raffles
const createNewRaffle = async (raffle) => {
    const { name, secret_token } = raffle;
    try {
        const newRaffle = await db.one(
            "INSERT INTO raffles (name, secret_token, created_on) VALUES ($1, $2, NOW()) RETURNING *",
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
    getSecretTokenByRaffleId,
    createNewRaffle,
};