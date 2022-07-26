import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String}
});

export default mongoose.model('Login', loginSchema);