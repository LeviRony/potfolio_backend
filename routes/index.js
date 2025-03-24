const express = require('express');
const router = express.Router();
const itemRoutes = require('./itemRoutes');
const skillsRoutes = require('./skillRoutes');
const careerRoutes = require('./careerRoutes');
const systemRoutes = require('./systemRoutes');

router.use('/items', itemRoutes);
router.use('/skills', skillsRoutes);
router.use('/careers', careerRoutes);
router.use('/systems', systemRoutes);

module.exports = router;
