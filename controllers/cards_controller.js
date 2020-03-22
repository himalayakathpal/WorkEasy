const List = require('../models/list');
const Card = require('../models/card');

module.exports.create = async function(req,res){
    try{
        let list = await List.findById(req.body.list);

        if (list){
            let card = await Card.create({
                title: req.body.title,
                dueDate: req.body.date,
                list: req.body.list
            });

            list.cards.push(card);
            list.save();
            
            await card.populate('list');
            res.redirect('back');
        }
    }catch(err){
        return;
    }
 
}