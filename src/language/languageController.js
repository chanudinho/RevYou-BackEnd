const {Language, Project} = require('../../sequelize/models/index');
const uuid = require("uuid/v4");

const createLanguage = (req, res) => {
    try {
        const {studiesLanguage} = req.body; 
        Language.findOrCreate({where: {studiesLanguage}, defaults: {
            id: uuid(),
            studiesLanguage
        }})
        .spread((mainQuestion, created) => {
            mainQuestion.get({
                plain: true
            });
            if(created === true){
                return res.status(201).send('Language cadastrada com sucesso');
            }else{
                return res.status(401).send('Language ja cadastrado');
            }
        });
    } catch (err) {
        return res.status(500).json({message: 'error interno', err});
    }
}

const createProjectsLanguages = async (req, res) => {
    try {
        const {studiesLanguage, ProjectId} = req.body
        const project = await Project.findByPk(ProjectId);
        const language = await Language.findOne({where: {studiesLanguage}});
        await project.addLanguagues(language);
        return res.status(201).send('Language associada com o projeto com sucesso');
    } catch (err) {
        return res.status(500).json({message: 'error interno' , err});
    }
}

const getLanguages = async (req, res) => {
    try {
        const {ProjectId} = req.params;
        const languages = await Project.findAll({
            include: [{
                model: Language, 
                association: "Languagues", 
                attributes:['studiesLanguage']
            }], 
            attributes:['id'],
            where: {id: ProjectId}
        })
        return res.status(200).json(languages);
    } catch (err) {
        return res.status(500).json({message: 'error interno', err});
    }
}

module.exports = {
    createLanguage,
    createProjectsLanguages,
    getLanguages
}