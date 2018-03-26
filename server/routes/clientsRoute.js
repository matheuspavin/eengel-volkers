'use strict';
const router = require('express').Router();
const clientsService = require('../services/clientsServices');

router.get('/', async function (req, res, next) {
    try {
        let result = await clientsService.getAll();
        return res.json(result);
    } catch (error) {
        next(error);
    }
});

router.get('/:clientId', async function (req, res, next) {
    var clientId = req.params.clientId;
    try {
        let result = await clientsService.getClientById(clientId);
        return res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post('/', async function(req, res, next){
    var client = req.body;
    try {
        let result = await clientsService.insertClient(client);
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.put('/:clientId', async function(req, res, next){
    var clientId = req.params.clientId;
    var client = req.body;
    try {
        let result = await clientsService.updateClient(clientId, client);
        res.send(result);
    } catch (error) {
        next(error);
    }
});


module.exports = router;