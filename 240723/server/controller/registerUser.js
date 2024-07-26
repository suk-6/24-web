const userModel = require('../models/userModel');

const registerUser = async (req, res) => {
    const { name, email, password, profileImg } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Profile Image: ${profileImg}`);
    res.status(201).json({
        message: 'User registered'
    });

    // const user = new userModel({
    //     name,
    //     email,
    //     password,
    //     profileImg
    // });
};