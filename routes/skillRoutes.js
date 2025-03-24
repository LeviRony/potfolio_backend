const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

router.get('/', skillsController.getAllSkills);
router.get('/:id', skillsController.getSkillById);

module.exports = router; 
