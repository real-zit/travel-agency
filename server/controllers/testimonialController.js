const Testimonials = require('../models/Testimonials');

exports.displayTestimonials = async (req, res) => {
    const testimonials = await Testimonials.findAll()
    res.render("testimonials", {
        pageTitle: 'Testimonials',
        testimonials
    });
}

exports.addTestimonials = async  (req,res) => { 
    
    
    let {name, email, message} = req.body;

    // validate the form
    let errors= [];

    if(!name){
        errors.push({'message':'Add your Name'})
    }
    if(!email){
        errors.push({'message':'Add your Email'})
    }
    if(!message){
        errors.push({'message':'Add your Testimonial'})
    }
    
    if(errors.length > 0){

        const testimonials = await Testimonials.findAll()
            res.render("testimonials", {
                    pageTitle: 'Testimonials',
                    errors,
                    name,
                    email,
                    message,
                    testimonials
            
            });

       
    }else{

        const result = await Testimonials.create({
            name,
            email,
            message
        })
        if(result){
            res.redirect('/testimonials')
        }else{
            console.log('Something went wrong')
        }
               
    }

}