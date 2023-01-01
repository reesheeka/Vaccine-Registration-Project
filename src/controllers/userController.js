const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    const data = req.body
    const { Name, PhoneNumber, Age, Pincode, AadharNo } = data
    const saveData = await userModel.create(data)
    return res.status(201).send({ status: true, message: "Success", data: saveData })
}


const loginUser = async function (req, res) {
    const data = req.body
    const { PhoneNumber, password } = data
    const loginData = await userModel.findOne(data)
    return res.status(200).send({ status: true, message: "Success", data: loginData })
}

module.exports = { createUser, loginUser }