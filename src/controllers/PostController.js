const Post = require('../models/Post')

module.exports = {
    async index( req, res){
        res.send('ok')
    },

    async store(req, res) {
        console.log(req.body)
        res.json({
            "ok":true
        })
    }
}