const os = require('os');
const { pokeneas } = require('../models/Pokenea');

class PokeneaController {
    static show(req, res) {
        
        const number = Math.floor(Math.random() * pokeneas.length);
        const pokenea = pokeneas[number];
        const { image, quote } = pokenea
        
        const viewData = {
            image: image,
            quote: quote,
            hostname: os.hostname(),
        }
        
        res.render('pokenea/show', {viewData: viewData});
    }
}

module.exports = PokeneaController;