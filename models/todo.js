const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
        user:{
            type: String,
            required: true
        },
        title:{
            type:String,
            required: true
        },
        category:{
            type:String,
            Enumerator:["Work", "Task", "Hobby"],
            required:true
        },
        completedStatus:{
            type: Boolean,
            default: false
        }
},
{timestamps: true}
);

module.exports = mongoose.model("Todo", todoSchema)