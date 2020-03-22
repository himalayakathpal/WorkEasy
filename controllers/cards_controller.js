const List = require('../models/list');
const Card = require('../models/card');
const fs = require('fs');
const path = require('path');

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


module.exports.addAttachment = async function(req, res){
   
        try{

            let card = await Card.findById(req.params.id);
            Card.uploadedAttachment(req, res, function(err){
                if (err) {console.log('*****Multer Error: ', err)}

                if (req.file){

                    if (card.attachment){
                        fs.unlinkSync(path.join(__dirname, '..', card.avatar));
                    }


                    // this is saving the path of the uploaded file into the avatar field in the user
                    card.attachment = Card.attachmentPath + '/' + req.file.filename;
                }
                card.save();
                return res.redirect('back');
            });

        }catch(err){
            return res.redirect('back');
        }
    }