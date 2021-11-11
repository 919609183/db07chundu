var Earphones = require('../models/earphones');
// List of all Earphones
exports.earphones_list = function (req, res) {
res.send('NOT IMPLEMENTED: Earphones list');
};
// for a specific Earphones.
exports.earphones_detail = function (req, res) {
res.send('NOT IMPLEMENTED: Ear Phones detail: ' + req.params.id);
};
// Handle Ear Phones create on POST.
exports.earphones_create_post = async function (req, res) {
console.log(req.body)
let document = new Earphones();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"brand":"honor", "model":"XL", "price":199}
document.brand = req.body.brand;
document.model = req.body.model;
document.price = req.body.price;
try {
let result = await document.save();
res.send(result);
} catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle earphones delete form on DELETE.
exports.earphones_delete = function (req, res) {
res.send('NOT IMPLEMENTED: earphones delete DELETE ' + req.params.id);
};
// Handle ear phones update form on PUT.
exports.earphones_update_put = function (req, res) {
res.send('NOT IMPLEMENTED: Earphones update PUT' + req.params.id);
};



// List of all Earphones
exports.earphones_list = async function (req, res) {
try {
theEarphones = await Earphones.find();
res.send(theEarphones);
} catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
}
};



// VIEWS
// Handle a show all view
exports.earphones_view_all_Page = async function (req, res) {
try {
theEarphones = await Earphones.find();
res.render('earphones', {
title: 'Earphones Search Results',
results: theEarphones
});
} catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
}
};