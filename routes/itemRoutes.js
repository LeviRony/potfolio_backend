const express = require('express');
const router = express.Router();
const intemController = require('../controllers/itemController'); 

/*Mapping the paths for the following functions*/
router.get('/', intemController.getItems);
router.get('/:index', intemController.getItemByIndex);
router.post('/', intemController.createItem);
router.put('/:index', intemController.updateItem);
router.delete('/:index', intemController.deleteItem);

module.exports = router;