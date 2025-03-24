const express = require('express');
const router = express.Router();
const intemController = require('../controllers/itemController');
const app = express();
const port = 3000;

const items = [
    {
        id: 1,
        name: 'Mouse'
    },
    {
        id: 2,
        name: 'Keyboard'
    }
];

const getItems = (req, res) => {
    res.send(items);
};

const getItemByIndex = (req, res) => {
    if(req.params.index >= items.length) {
        res.status(404).send('Item not found');
    }

    res.send(items[req.params.index]);
};

const createItem = (req, res) => {
    const newItem = req.body;
    items.push(newItem);

    res.status(201).send(newItem);
};

const updateItem = (req, res) => {
    if(req.params.index >= items.length) {
        res.status(404).send('Item not found');
    }

    items[req.params.index] = req.body;

    res.send(items[req.params.index]);
};

const deleteItem = (req, res) => {
    if(req.params.index >= items.length) {
        res.status(404).send('Item not found');
    }

    const deleted = items.splice(req.params.index, 1);

    res.send(deleted[0]);
};

module.exports = {
    getItems,
    getItemByIndex,
    createItem,
    updateItem,
    deleteItem
};