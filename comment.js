// Create web server with express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by id
router.get('/:id', commentController.getCommentById);

// Post comment
router.post('/', commentController.postComment);

// Update comment
router.put('/:id', commentController.updateComment);

// Delete comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;