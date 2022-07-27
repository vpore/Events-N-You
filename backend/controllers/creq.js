import committee from "../models/committee.js";

export const comreq = async (req, res) => {
    const {comname, email, evename, sdate, stime, edate, etime, evedet } = req.body;

    try{

        const existingDate = await committee.findOne({sdate});

        const validCom = await committee.findOne({comname});

        if(!validCom) return res.status(404).json({message: "Not a valid committee username"});
       
        if(existingDate) return res.status(404).json({message: "Date is already alloted for other event!"});
        // if(existingDate) {
        //     alert("Date is already alloted for other event!");
        // }
        // else {
            const event = req.body;
        const newEvent = new committee({...event});

        await newEvent.save();
        res.status(201).json(newEvent);

    

    }
    catch(error) {
        res.status(409).json({message: error.message});
        console.log(error);

    }
}