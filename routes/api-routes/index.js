const router = require('express').Router();
const users = require('./users.js');
const posts = require('./post.js');
const category = require('./category');
const book = require('./book');
const img = require('./img');
const song = require('./song');
const video = require('./video');
const search = require('./booksearch');
const bookpost = require('./bookpost');
const categorypost = require('./categorypost');
const imgpost = require('./imgpost');
const songpost = require('./songpost');
const videopost = require('./videopost');
const songsearch = require('./songsearch');

router.use('/users', users);
router.use('/post', posts);
router.use('/category', category);
router.use('/book', book);
router.use('/img', img);
router.use('/song', song);
router.use('/video', video);
router.use('/booksearch', search);
router.use('/bookpost', bookpost);
router.use('/categorypost', categorypost);
router.use('/imgpost', imgpost);
router.use('/songpost', songpost);
router.use('/videopost', videopost);
router.use('/songsearch', songsearch);

module.exports = router;