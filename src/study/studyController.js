const {Study} = require('../../sequelize/models/index');
const fs = require('fs');
const uuid = require("uuid/v4");
const {parseBibFile, normalizeFieldValue} = require('bibtex');

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
        return res.status(500).send('error');
    }
}

const getStudies = async (req, res) => {
    try{
        const {ProjectId} = req.params;
        const result = await Study.findAll({where: {ProjectId}, attributes:['id','title','authors','generalStatus','year']});
        return res.status(200).json(result)
    }catch(err){
        return res.status(500).json({message: 'error arquivo', err});
    }
}

const getStudy = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await Study.findByPk(id);
        return res.status(200).json(result)
    }catch(err){
        return res.status(500).json({message: 'error arquivo', err});
    }
}

const importStudies = async (req, res) =>{
    try{
        const file = req.files[0].path;
        const {ProjectId} = req.params;
        fs.renameSync(file, 'temp/base.bib')
        const document = fs.readFileSync('temp/base.bib','utf8');
        const result = document.split("@");
        const at = "@"
        
        if(ProjectId == 'undefined') {
            return res.status(500).json({message: 'ProjectId não existe'});
        }

        await result.forEach((res,index) => {
            let title, authors, citekey, keywords, venue, year, pages, volume, url, issn, doi, generalStatus, venueType; 
            if(index > 0){
                let documentCurrent = at.concat(res);
                const study = parseBibFile(documentCurrent);
                id = study.content[0]._id;   
                title = normalizeFieldValue(study.getEntry(id).getField("title")) || normalizeFieldValue(study.getEntry(id).getField("booktitle"));
                authors = normalizeFieldValue(study.getEntry(id).getField("author"));
                citekey = normalizeFieldValue(study.getEntry(id).getField("key")) || "";
                keywords = normalizeFieldValue(study.getEntry(id).getField("keywords"));
                venue = normalizeFieldValue(study.getEntry(id).getField("address"));
                year = normalizeFieldValue(study.getEntry(id).getField("year"));
                pages = normalizeFieldValue(study.getEntry(id).getField("pages"));
                volume = normalizeFieldValue(study.getEntry(id).getField("volume"));
                url = normalizeFieldValue(study.getEntry(id).getField("url"));
                issn = normalizeFieldValue(study.getEntry(id).getField("isbn")) || normalizeFieldValue(study.getEntry(id).getField("issn")) ;
                doi = normalizeFieldValue(study.getEntry(id).getField("doi"));
                generalStatus = "Unclassified"
                abstract = normalizeFieldValue(study.getEntry(id).getField("abstract"));
                
                Study.create({id: uuid(), title, authors, abstract, citekey, keywords, venue,
                    year, pages, volume, url, issn, doi, generalStatus, venueType, ProjectId});
            }
        })
        
        return res.status(201).json({message: 'Criado'});

    }catch(err){
        return res.status(500).json({message: 'error arquivo', err});
    }
}

module.exports = {
    createStudy,
    getStudy,
    getStudies,
    importStudies
}