var express = require('express');
const earphones_controlers= require('../controllers/earphones');
var router = express.Router();



/* GET earphones */
router.get('/', earphones_controlers.earphones_view_all_Page );
module.exports = router;




/* GET home page. */
router.get('/', function (req, res, next) {
res.render('earphones', { title: 'Search Results Ear Phones' });
});

// GET request for one costume.
router.get('/earphones/:id', earphones_controlers.earphones_detail);

/* GET detail costume page */
router.get('/detail', earphones_controlers.earphones_view_one_Page);

/* GET create costume page */
router.get('/create', earphones_controlers.earphones_create_Page);

/* GET create update page */
router.get('/update', earphones_controlers.earphones_update_Page);

/* GET create costume page */
router.get('/delete', earphones_controlers.earphones_delete_Page);
module.exports = router;