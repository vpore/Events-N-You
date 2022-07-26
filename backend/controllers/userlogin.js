import login from "../models/login.js";

const secret = "test";

export const signin = async (req, res) => {
    const {username, password} = req.body

    try {
        const existingUser = await login.findOne({username});

        if(!existingUser) return res.status(404).json({message: "User does not exist!"});

        const isPwd = await login.findOne({password});

        if(!isPwd) return res.status(404).json({message: "User does not exist"});

        const token = jwt.sign({ username: result.username, _id: result.id}, secret, {expiresIn: "1h"});

        res.status(201).json({result, token});
    }
    catch(error) {
        res.status(500).json({message: "Something went wrong!"});

        console.log(error);
    }
}