const express = require('express');
const trackController = require('./controllers/track.controller');
const router = express.Router();

router.get('/', trackController.getTracks); 
router.delete('/:id', trackController.deleteTrack); 

module.exports = router;
