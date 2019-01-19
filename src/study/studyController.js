const {Study} = require('../../sequelize/models/index');

const createStudy = (req, res) => {
    const venueTypes = ['journal','conference proceedings','technical report','thesis','book'];
    try{
        const {title, authors, citekey, keywords, venue, year, pages, volume, url, issn, doi} = req.body;
        console.log(venue);
        if(venueTypes.indexOf(venue) !== -1 || venue === undefined){
            Study.create({title: title, authors: authors, citekey: citekey, keywords: keywords, venue : venue,
                 year: year, pages: pages, volume: volume, url:url, issn:issn, doi:doi});
            
            res.status(201).json('criado');
        }else{
            return res.status(401).json('venue invalido');
        }
    }catch(err){
        res.status(500).send('error');
    }
}

const findStudy = (req, res) => {
    res.json('ta fazendo nada');
}

module.exports = {
    createStudy,
    findStudy
}