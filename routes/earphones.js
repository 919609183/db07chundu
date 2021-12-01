var express = require('express');
const earphones_controlers= require('../controllers/earphones');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET earphones */
router.get('/', earphones_controlers.earphones_view_all_Page );
/* GET detail earphones page */
router.get('/detail', earphones_controlers.earphones_view_one_Page);
/* GET create earphones page */
router.get('/create', secured, earphones_controlers.earphones_create_Page);
/* GET create update page */
// router.get('/update', earphones_controlers.earphones_update_Page);
/* GET update earphones page */
router.get('/update', secured, earphones_controlers.earphones_update_Page);
/* GET create earphones page */
router.get('/delete', secured, earphones_controlers.earphones_delete_Page);

module.exports = router;