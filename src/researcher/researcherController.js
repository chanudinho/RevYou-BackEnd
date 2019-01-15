const Researcher = require('../../sequelize/models/researcher');

const createResearcher= async (req, res) => {
    try{
        const {name, email, password} = req.body;
        
        /* await Researcher.findOrCreate({where: {email: email}, defaults: {name: name, password: password}})
        .spread((researcher, created) => {
            researcher.get({
                plain: true
            });
            console.log(created);
        });*/
        Researcher.create({name: 'name', email: 'email', password: 'password'});
        return res.status(201).send('sucesso');
    }catch (err){
        return res.status(500).send('error');
    }
}

module.exports = {
    createResearcher
}