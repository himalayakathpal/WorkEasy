
const User = require('../models/user');
const Board = require('../models/board');


module.exports.home = async function(req, res){

    try{
        let boards = await Board.find({}).populate('user').populate({path:'lists'});
        return res.render('home', {
            title: "WorkEasy | Home",
            boards: boards
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
