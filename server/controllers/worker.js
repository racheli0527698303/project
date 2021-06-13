const Worker = require('../models/Worker');

const jwt = require('jsonwebtoken');

const checkPermission = async (req, res) => {
    Worker.findOne({ email: req.body.email, password: req.body.password })
        .then((worker) => {
            if (!worker)
                return res.status(400).json({ message: 'worker not exists' })
            // let decoded=jwt.verify(worker,process.env.secret)
            // console.log(decoded)  
            return res.status(200).json(worker)
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message })
        })
}

const setNewEmployed = async (req, res) => {
    console.log("hellow");
    let worker = new Worker({
        fullName:req.body.fullName,
        email:req.body.email,
        passWord:req.body.passWord
    })
    console.log(worker);
    try {
        await worker.save();
        // let token = await jwt.sign({ worker }, process.env.secret)
        res.status(200).json({ Worker: worker})
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}
const getAllEmployed = async (req, res) => {
    try {
        let workers = await Worker.find();
        res.status(200).json(workers)
    }
    catch (err) {
        return res.status(400).json({ err: err.message })
    }
}

const getEmployeById = async (req, res) => {
    try {
        let worker = await Worker.findById(req.params.id)
        res.status(200).json(worker)
    }
    catch (err) {
        return res.status(400).json({ err: err.message })
    }
}
const updateEmployed = (req, res) => {
    Worker.findByIdAndUpdate(req.params.id, req.body)
        .then((worker) => {
            if (!worker)
                return res.status(400).json({ message: 'worker not exists' })
            return res.status(200).json(worker)
        })
        .catch((err) => {
            return res.status(500).json({ err: err.message })
        })
}
module.exports = { setNewEmployed, getEmployeById, getAllEmployed, updateEmployed, checkPermission }

