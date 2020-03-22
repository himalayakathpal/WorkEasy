const multer = require('multer');
const path= require('path');
const attachmentPath= path.join('/uploads/cards/attachments');
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
    },
    attachment:
    {
            type: String
        }
    
    
},{
    timestamps:true
});


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',attachmentPath));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });

  cardSchema.statics.uploadedAttachment = multer({storage: storage}).single('attachment');
  cardSchema.statics.attachmentPath = attachmentPath;
   



const Card = mongoose.model('Card', cardSchema);

module.exports = Card;