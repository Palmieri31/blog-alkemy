const express = require('express');

const router = express.Router();

const validator = require('../middlewares/validator');
const postsCtrl = require('../controllers/posts.controller');

router.get('/', postsCtrl.getPosts);
router.get('/:id', postsCtrl.getPostById);
router.post('/', [validator.postValidationRules(), validator.validate], postsCtrl.addPost);
router.patch('/:id', [validator.postValidationRules(), validator.validate], postsCtrl.updatePost);
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;
