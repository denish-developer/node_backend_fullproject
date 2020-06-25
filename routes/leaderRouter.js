const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaderes to you! ');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaderes');
    })
    .delete((req, res, next) => {
        res.end('Delete all the leaderes to you! ');
    });


leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send detail of the leader :  ' + req.params.leaderId + 'to you !');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaderes/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write('Updating the leader:  ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name + 'with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Delete leader: ' + req.params.leaderId);
    });






module.exports = leaderRouter;
