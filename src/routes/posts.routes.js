const express = require('express');

const router = express.Router();

const postsCtrl = require('../controllers/posts.controller');

router.get('/', postsCtrl.getPosts);

module.exports = router;