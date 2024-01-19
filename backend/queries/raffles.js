const db = require("../db/dbConfig");

const getAllRaffles = async () => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles");
        return allRaffles;
    } catch (err) {
        return err;
    }
}

const getOneRaffleById = async (id) => {
    try {
        const oneRaffleById = await db.oneOrNone("SELECT * FROM raffles WHERE id=$1", id);
        return oneRaffleById;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllRaffles,
    getOneRaffleById
};