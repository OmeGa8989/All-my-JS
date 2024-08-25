import mongoose from 'mongoose';

const todoSchema = new mongoose.schema({
  content : {
    type : String,
    required : true,
  },
  complete: {
    type : Boolean,
    default : false
  },
  // object of user model stored here
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  // array of subtodos
  subTodos : [
    {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'subTodo'
  }
]
},{timestamps : true})
// schema accept object as param

export const Todo = mongoose.model("Todo" , todoSchema)
// will be named as todos in mongodb
