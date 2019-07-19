const {Invitation, Researcher} = require('../../sequelize/models/index');
const uuid = require("uuid/v4");

const createInvitation = async (req, res) => {
    try {
        const {email, ProjectId} = req.body;
        const researcher = await Researcher.find({where: {email: email}});
        Invitation.create({
            id: uuid(),
            email,
            situation : 'pending',
            ProjectId
        }).then( () => {
            if(!!researcher){
                
            }else{

            }
            res.status(201).json('criado');
        }).catch( () => {
            res.status(500).json('Project id invalido');
        });
    }catch(err){
        res.status(500).json({message: 'error interno'});
    } 
}
  

module.exports = {
    createInvitation
}