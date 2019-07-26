const {Project, Researcher} = require('../../sequelize/models/index');
const uuid = require("uuid/v4");

const createProject = (req, res) => {
    try{
        const {title, description, objective, CoordinatorId } = req.body;
        if (!!CoordinatorId){
            Project.create({
                id: uuid(),
                title,
                description,
                objective,
                CoordinatorId
            }).then( () => {
                res.status(201).json('criado');
            }).catch( () => {
                res.status(500).json('Coordinator id invalido');
            });
        }else{
            res.status(404).json('Coordinator id is null');
        }
    }catch (err){
        return res.status(500).json({message: 'error interno', err});
    }
}

const inviteResearcher = async(req, res) => {
    try{
        const {email, idProject} = req.body;
        const researcher = await Researcher.find({where: {email: email}});
        if(!!researcher){
            const project = await Project.findByPk(idProject)
            project.addResearcher(researcher);
            return res.status(200).json({message: 'sucesso'});
        }
    }catch(err){
        return res.status(500).json({message: 'error interno', err });
    }
}

const getInvited = async (req, res) => {
    try{
        const {ProjectId} = req.params;
        const project = await Project.findByPk(ProjectId);
        if (!!project){
           const inviteds = await project.getInviteds({attributes:['id' ,'email', 'situation']});
           return res.status(200).send(inviteds);
        }else{
            return res.status(404).json('project inexistente');
        }
    }catch(err){
        return res.status(500).json({message: 'error interno', err});
    }
}

const deleteProject = async (req, res) => {
    try{
        const {id} = req.params;
        const deletado = await Project.destroy({where: {id}});
        if(!!deletado){
            return res.status(200).json({message: "deletado com sucesso"});
        }else{
            return res.status(404).json({message: 'projeto inexistete'});
        }
    }catch(err){
        return res.status(500).json({message: 'error interno' , err});
    }
}

const updateProject = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description, objective, CoordinatorId} = req.body
        const result = await Project.update({
            title,
            description,
            objective,
            CoordinatorId
        },
        {where: {id}});
        console.log(result);
        if(!!result){
            return res.status(200).json({message: "projeto atulizado"});
        }else{
            return res.status(404).json({message: 'projeto inexistete'});
        }
    }catch(err){
        return res.status(500).json({message: 'error interno' , err});
    }
}

module.exports = {
    createProject,
    deleteProject,
    updateProject,
    inviteResearcher,
    getInvited
}