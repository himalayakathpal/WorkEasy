
const User = require('../models/user');



module.exports.home = async function(req, res){

    try{

        return res.render('home', {
            title: "WorkEasy | Home"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}

// module.exports.actionName = function(req, res){}


// using then
// Post.find({}).populate('comments').then(function());

// let posts = Post.find({}).populate('comments').exec();

// posts.then()
