const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title: {
        type:String
    },
    cards: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ],
    board: {
        type:  mongoose.Schema.Types.ObjectId,
            ref: 'Board'
    },
    user:{
        type:  mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }
},
{
    timestamps:true
});



const List = mongoose.model('List', listSchema);

module.exports = List;