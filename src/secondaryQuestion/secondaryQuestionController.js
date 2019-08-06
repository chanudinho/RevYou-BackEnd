const {SecondaryQuestion} = require('../../sequelize/models/index');
const uuid = require("uuid/v4");

const createSecondaryQuestion = async (req, res) => {
    try{
        const {description, ProjectId} = req.body;
        console.log(ProjectId);
        await Object.keys(description).forEach(function(item){
            SecondaryQuestion.create({
                id: uuid(),
                description: description[item],
                ProjectId
            });
        });    
        return res.status(200).json({message: 'Secondary Question Cadastrada'});
    }catch(err){
        return res.status(500).json({message: 'error interno', err});
    }
}

const getSecondaryQuestion = async (req, res) => {
    try{
        const {ProjectId} = req.params;
        const result = await SecondaryQuestion.findAll({where: {ProjectId}});

        if(result){
            return res.status(201).json(result);
        }else{
            return res.status(404).json({message: 'Secondary Question não existe'});
        }
    }catch(err){
        return res.status(500).json({message: 'error interno', err});
    }
}

const updateSecondaryQuestion = async (req, res) => {
    try{

    }catch(err){
        return res.status(500).json({message: 'error interno', err});
    }
}

module.exports = {
    createSecondaryQuestion,
    getSecondaryQuestion,
    updateSecondaryQuestion
}