// Create web server
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
// Path: commentController.js
// Compare this snippet from commentController.js:
// const Comment = require('../models/comment');
// const mongoose = require('mongoose');
// 
// exports.getAllComments = (req, res, next) => {
//     Comment.find()
//         .select('_id author text')
//         .exec()
//         .then(docs => {
//             const response = {
//                 count: docs.length,
//                 comments: docs.map(doc => {
//                     return {
//                         _id: doc._id,