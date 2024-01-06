// Create web server
// ----------------

// import express module
const express = require('express');
const router = express.Router();

// import comment controller
const commentController = require('../controllers/comment_controller');

// create route for post comments
router.post('/create', commentController.create);

// create route for delete comments
router.get('/destroy/:id', commentController.destroy);

// export router
module.exports = router;