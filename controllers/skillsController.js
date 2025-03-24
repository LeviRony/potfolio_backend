const skillModel = require('../models/skillsModel');

const getAllSkills = async (req, res) => {
    const result = await skillModel.getAllSkillsSQL();
    if(!result) {
        res.status(404).send('Skills not found');
    }
    res.json(result);
}

const getSkillById = async (req, res) => {
    const id = req.params.id;
    const result = await skillModel.getSkillByIdSQL(id);
    if(!result) {
        res.status(404).send('Skill not found');
    }

    res.json(result);
}

module.exports = { 
    getAllSkills,
    getSkillById,
}