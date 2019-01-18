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

module.exports = {
    createResearcher
}