const Board = require('../models/board');
const List = require('../models/list');



module.exports.create = function(req, res){
  

    Board.findOne({title: req.body.title}, function(err, board){
        if(err){ return;}

        if (!board){
            Board.create({
                title: req.body.title,
                user: req.user._id
            }, function(err, board){
                if(err){ return;}

                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }

    });
}


module.exports.dashBoard = async function(req,res){
    try{
    let boards = await Board.find({});
    let board = await Board.findById(req.params.id);
    let lists = await List.find({_id:{$in: board.lists}}).populate('cards');
    return res.render('board',{
        title: 'dashBoard',
        board: board,
        boards:boards,
        lists: lists

    });
}catch(err){
    console.log('Error', err);
    return;
}
}