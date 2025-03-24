const careerModel = require('../models/careerModel');

const getAllCareers = async (req, res) => {
    const result = await careerModel.getAllCareersSQL();
    if(!result) {
        res.status(404).send('company not found');
    }
    res.json(result);
}

const getCareerById = async (req, res) => {
    const id = req.params.id;
    const result = await careerModel.getCareerByIdSQL(id);
    if(!result) {
        res.status(404).send('company not found');
    }

    res.json(result);
}

module.exports = { 
    getAllCareers,
    getCareerById,
}