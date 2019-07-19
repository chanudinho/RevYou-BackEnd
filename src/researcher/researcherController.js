const {Researcher} = require('../../sequelize/models/index');
const uuid = require("uuid/v4");

const createResearcher= (req, res) => {
    try{
        const {name, email, password} = req.body;
        
        Researcher.findOrCreate({where: {email: email}, defaults: {
            id : uuid(),
            name, 
            password
        }})
        .spread((researcher, created) => {
            researcher.get({
                plain: true
            });
            if(created === true){
                return res.status(201).send('pesquisador cadastrado com sucesso');
            }else{
                return res.status(401).send('email ja cadastrado');
            }
        });
    }catch (err){
        return res.status(500).send('error');
    }
}

const getResearcher = async (req, res) => {
    try{
        
        const {email} = req.params;
        const researcher = await Researcher.find({where: {email: email}});
        
        console.log(researcher);
        if(researcher){
            return res.status(202).json(researcher);
        }else{
            return res.status(404).json({ message: 'usuario inexistente'});
        }    
    }catch(err){
        return res.status(500).json({ message: 'error'}, err);
    }
}

const updateResearcher = async (req, res) => {
    try{
        const {email} = req.params;
        const {name, newemail, password} = req.body;
        const researcher = await Researcher.find({where:{email:email}});
        console.log(researcher);
        if (researcher){
            await Researcher.update({name : name, email: newemail, password: password},{where: {email: email}});
            res.status(201).send('researcher alterado com sucesso');
        }
        else{
            res.status(404).send('researcher não existe');
        }  

    }catch(err){
        res.status(500).send(err);
    }
}

const deleteResearcher = async (req, res) => {
    try{
        const {email} = req.params;
        const researcher = await Researcher.find({where: {email: email}});
        if(researcher){
            Researcher.destroy({where: {email: email}});
            return res.status(200).send('usuario deletado com sucesso');
        }else{
            return res.status(404).send('researcher não existe');
        }
        
    }catch(err){
        return res.status(500).send('error');
    }
}

const getProjectsResearcher = async (req, res) => {
    try{
        const {email} = req.params;
        const researcher = await Researcher.find({where:{email:email}});
        const projects = await researcher.getProjects({attributes: ['CoordinatorId', 'title']
        }).then(async (res) => {
            const projects2 = await researcher.getCoordinator({attributes: ['id', 'CoordinatorId', 'title']});
            res = await res.concat(projects2);
            return res;
        });
        return res.status(200).send(projects);
    }catch (err) {
        return res.status(500).json({message: 'error interno'}, err);
    }
}

module.exports = {
    createResearcher,
    getResearcher,
    updateResearcher,
    deleteResearcher,
    getProjectsResearcher
}