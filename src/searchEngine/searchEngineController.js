const {SearchEngine, Project} = require('../../sequelize/models/index');
const uuid = require("uuid/v4");

const createSearchEngine = (req, res) => {
    try {
        const {name} = req.body; 
        SearchEngine.findOrCreate({where: {name}, defaults: {
            id: uuid(),
            name
        }})
        .spread((mainQuestion, created) => {
            mainQuestion.get({
                plain: true
            });
            if(created === true){
                return res.status(201).send('Search Engine cadastrada com sucesso');
            }else{
                return res.status(401).send('Search Engine ja cadastrado');
            }
        });
    } catch (err) {
        return res.status(500).json({message: 'error interno', err});
    }
}

const createProjectsSearchEngines = async (req, res) => {
    try {
        const {name, ProjectId} = req.body
        const project = await Project.findByPk(ProjectId);
        const searchEngine = await SearchEngine.findOne({where: {name}});
        await project.addSearchEngines(searchEngine);
        return res.status(201).send('Search Engine associada com o projeto com sucesso');
    } catch (err) {
        return res.status(500).json({message: 'error interno' , err});
    }
}

const getSearchEngines = async (req, res) => {
    try {
        const {ProjectId} = req.params;
        const searchEngine = await Project.findAll({
            include: [{
                model: SearchEngine, 
                association: "SearchEngines", 
                attributes:['name']
            }], 
            attributes:['id'],
            where: {id: ProjectId}
        })
        return res.status(200).json(searchEngine);
    } catch (err) {
        return res.status(500).json({message: 'error interno', err});
    }
}

module.exports = {
    createSearchEngine,
    createProjectsSearchEngines,
    getSearchEngines
}