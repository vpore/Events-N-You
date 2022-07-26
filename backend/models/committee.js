import mongoose from "mongoose";

const comSchema = mongoose.Schema({
    comname: {type: String},
    evename: {type: String},
    evedate: {type: Date},
    time: {type: String},
    evedet: {type: String}
});

export default mongoose.model('Requests', comSchema);