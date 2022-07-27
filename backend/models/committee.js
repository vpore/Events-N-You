import mongoose from "mongoose";

const comSchema = mongoose.Schema({
    comname: {type: String},
    email: {type: String},
    evename: {type: String},
    sdate: {type: String},
    stime: {type: String},
    edate: {type: String},
    etime: {type: String},
    evedet: {type: String}
});

export default mongoose.model('Request', comSchema);