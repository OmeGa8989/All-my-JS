import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  // {
  //   username: String,
  //   email : String,
  //   isActive : Boolean

  // }
  // better industry meethod
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [8, 'Please enter atleast 6 charachters'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
// to make user model using mongoose based on userSchema
// mongoose converts User => users (model name to plural and lower-case)
