const {Schema, model} = require('mongoose');
const ToDoSchema = new Schema({
    id:{
        unique: true,
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    isUser:{
        type:Boolean,
        default: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},
{timestamps: true}
);
const Todolist = model("TODO", ToDoSchema );
module.exports = Todolist;