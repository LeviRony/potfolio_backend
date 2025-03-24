const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

router.get('/', careerController.getAllCareers);
router.get('/:id', careerController.getCareerById);

module.exports = router; 
