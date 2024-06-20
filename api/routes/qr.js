var express = require('express');
const Qr = require('../models/qr');
var router = express.Router();

router.get('/', async function(req, res, next) {
    const qrs = await Qr.findAll();
    res.json(qrs);
});
router.post('/', async function(req, res, next) {
    const user = await Qr.create(req.body);
    res.json(user);
});
router.delete('/:id', async function(req, res, next) {
    const id=req.params.id
    const user = await Qr.destroy({
        where: {
            id
        },
    });
    res.sendStatus(200)
});
module.exports = router;