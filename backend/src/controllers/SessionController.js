const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {id} = request.body;
        const ong = await connection('ongs').select('nome').where('id', id).first();
        
        if(!ong){
            return response.status(400).json({erro: 'fudeo de vez'});
        }

        return response.json(ong);
    }
};