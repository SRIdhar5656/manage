const taskmodel = require("../models/taskmodel");
const mongoose = require('mongoose')


const createtask = async (req,res) =>{
    const {title,description} = req.body
    try{
        const task = await taskmodel.create({title,description});
        res.status(200).json(task);
    }catch (e) {
        res.status(400).json({error:e.message})
    }
    
};

const gettask = async (req,res) =>{
    // const {title,description} = req.body
    try{
        const task = await taskmodel.find({});
        res.status(200).json(task);
    }catch (e) {
        res.status(400).json({error:e.message})
    }
    
};

const getsingletask =async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'not found'});
    }
    try{
        const singletask = await taskmodel.findById(id)
        res.status(200).json(singletask)
    }catch(e){
         res.status(400).json({error:e.message})
    }
};


const updatetask = async(req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'not found'});
    }try{
        const task = await taskmodel.findByIdAndUpdate({
            _id:id
        },
        {
            ...req.body
        })
           res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})

    }
};
const deltask = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'not found'});
}try{
    const task = await taskmodel.findByIdAndDelete(id)
    res.status(200).json(task)

}catch (e) {
    res.status(400).json({error:e.message})
}
};


module.exports = {createtask,gettask,getsingletask,updatetask,deltask};