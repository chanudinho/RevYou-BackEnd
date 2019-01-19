const {Researcher} = require('../../sequelize/models/index');

const createResearcher= (req, res) => {
    try{
        const {name, email, password} = req.body;
        
        Researcher.findOrCreate({where: {email: email}, defaults: {name: name, password: password}})
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
            return res.status(202).send(researcher);
        }else{
            return res.status(404).send('usuario inexistente');
        }    
    }catch(err){
        return res.status(500).send('error');
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

module.exports = {
    createResearcher,
    getResearcher,
    updateResearcher,
    deleteResearcher
}