import login from "../models/login.js";
import jwt from "jsonwebtoken";

const secret = "test";

export const signin = async (req, res) => {
    const {username, password} = req.body

    try {
        
        const existingUser = await login.findOne({username});
        console.log(username);
        if(!existingUser) return res.status(404).json({message: "User does not exist!"});
        //console.log("hii");
        const isPwd = await login.findOne({password});

        if(!isPwd) return res.status(404).json({message: "User does not exist"});

        const token = jwt.sign({ username: existingUser.username, _id: existingUser.id}, secret, {expiresIn: "1h"});

        res.status(201).json({existingUser, token});
    }
    catch(error) {
        res.status(500).json({message: "Something went wrong!"});
        console.log("hi");
        console.log(error);
    }
}