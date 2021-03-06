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
exports.earphones_delete = async function (req, res) {
    console.log("delete " + req.params.id)
try {
result = await Earphones.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
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

// for a specific Costume.
exports.earphones_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Earphones.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle earphones update form on PUT.
    exports.earphones_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Earphones.findById( req.params.id)
    // Do updates of properties
    if(req.body.brand)
    toUpdate.brand = req.body.brand;
    if(req.body.model) toUpdate.model = req.body.model;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// Handle a show one view with id specified by query
exports.earphones_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Earphones.findById( req.query.id)
    res.render('Earphonesdetail',
    { title: 'Earphones Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earphones_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earphonescreate', { title: 'Earphones Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.earphones_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Earphones.findById(req.query.id)
    res.render('earphonesupdate', { title: 'Earphones Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.earphones_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Earphones.findById(req.query.id)
    res.render('earphonesdelete', { title: 'Earphones Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };