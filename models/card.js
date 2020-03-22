const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    dueDate:{
        type: Date
    },
    list:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'List'
    }
    
},{
    timestamps:true
});



const Card = mongoose.model('Card', cardSchema);

module.exports = Card;