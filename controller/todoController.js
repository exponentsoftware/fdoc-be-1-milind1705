const Todo = require('../models/todo');

module.exports.createTodo = (req, res) =>{
    const newTodo = new Todo(req.body);
    newTodo
    .save()
    .then((data) => {
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message|| "Something went wrong"
        });
    });
};

module.exports.getAll_todo = (req, res) => {
    Todo.find({}).then((data) => {
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message|| "Something went wrong"
        });
    });
}

module.exports.get_todo_byId = (req, res) => {
    Todo.findById({_id: req.params.id}).then((data) => {
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message|| "Something went wrong"
        });
    });
};

module.exports.update_todo = (req,res) => {
    Todo.findByIdAndUpdate({_id:req.params.id}, req.body).then(() =>{
        Todo.findById({_id:req.params.id}).then((data) =>{
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json({
                message: err.message|| "Something went wrong"
            });
        });
    })
};

module.exports.delete_todo_byId = (req, res) => {
    Todo.findByIdAndDelete({_id: req.params.id}).then((data) => {
        return res.status(200).json("Successfully deleted")
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message|| "Something went wrong"
        });
    });
};