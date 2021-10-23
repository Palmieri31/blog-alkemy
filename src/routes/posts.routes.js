const express = require('express');

const router = express.Router();

const postsCtrl = require('../controllers/posts.controller');

router.get('/', postsCtrl.getPosts);
router.get('/:id', postsCtrl.getPostById);

module.exports = router;