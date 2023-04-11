const user = require("../models/User")
const getAllUser = async (req, res, next) => {
    let users;

    try {
        users = await user.find();
    } catch (err) {
        return console.log(err);

    }

    if (!users) {
        return res.status(500).json({
            message: "Unexpected error"
        })
    }

    return res.status(200).json({ users })
}
    ;
const signup = async (req, next, res) => {
    const { name, email, password } = req.body;
    if (
        !name &&
        name.trim() === "" &&
        !email &&
        email.trim() === "" &&
        !password && password.trim() === ""
    )
    {
    return res.status(422).json({message: "Invalid Inputs"})
    }
    let users;
try { 
    users = new user({ name, email, password });
    users = await users.save();
    
} catch (err) {
    return console.log(err);
}


if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occurred" })
}

return res.status(201).json({ users });

    
}

module.exports = {getAllUser, signup}