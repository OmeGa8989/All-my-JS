import mongoose from 'mongoose';

const subTodoSchema = new mongoose.schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdBy : {
      type : mongoose.Schema.Types.ObjectId,
      // ref is required mandatory after type
      ref : "User",
    }
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('subTodo', subTodoSchema);
