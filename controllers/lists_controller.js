const List = require('../models/list');
const Board = require('../models/board');

module.exports.create = async function(req,res){
    try{
        let board = await Board.findById(req.body.board);

        if (board){
            let list = await List.create({
                title: req.body.title,
                board: req.body.board,
                user: req.user._id
            });

            board.lists.push(list);
            board.save();
            
            await list.populate('user');
            res.redirect('back');
        }
    }catch(err){
        return;
    }
 
}