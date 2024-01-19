const db = require("../db/dbConfig");

const getAllRaffles = async () => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles");
        return allRaffles;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllRaffles
};