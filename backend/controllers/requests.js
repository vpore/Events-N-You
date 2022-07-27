import committee from "../models/committee.js";
import mongoose from "mongoose";

export const getRequests = async (req, res) => {
    try{
        const requestBod = await committee.find();
        res.status(200).json(requestBod);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}