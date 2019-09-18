const express = require('express');

 const router = express.Router();


// import Controller
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialController = require('../controllers/testimonialController');
const homeController = require('../controllers/homeController');


 module.exports = function(){
    
    //Homepage 
    router.get('/',homeController.homeInformation);

    // About us
    router.get('/about',aboutController.aboutInformation);


    router.get('/travels', travelController.dislayTravels);
    
    router.get('/travels/:id',travelController.dislayTravel);

    router.get('/testimonials',testimonialController.displayTestimonials )

    // handle form submission
    router.post('/testimonials', testimonialController.addTestimonials)


    return router;
 }