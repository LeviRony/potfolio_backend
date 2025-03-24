const systemModel = require('../models/systemModel');

const getAllSystems = async (req, res) => {
    const result = await systemModel.getAllSystemsSQL();
    if(!result) {
        res.status(404).send('company not found');
    }
    res.json(result);
}

const getCSystemById = async (req, res) => {
    const id = req.params.id;
    const result = await systemModel.getSystemByIdSQL(id);
    if(!result) {
        res.status(404).send('company not found');
    }

    res.json(result);
}

module.exports = { 
    getAllSystems,
    getCSystemById,
}