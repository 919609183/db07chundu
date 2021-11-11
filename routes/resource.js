var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var earphones_controller = require('../controllers/earphones');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// earphones ROUTES ///
// POST request for creating a earphones.
router.post('/resource/earphones', earphones_controller.earphones_create_post);
// DELETE request to delete earphones.
router.delete('/resource/earphones/:id', earphones_controller.earphones_delete);
// PUT request to update earphones.
router.put('/resource/earphones/:id', earphones_controller.earphones_update_put);
// GET request for one earphones.
router.get('/resource/earphones/:id', earphones_controller.earphones_detail);
// GET request for list of all earphones items.
router.get('/resource/earphones', earphones_controller.earphones_list);
module.exports = router;