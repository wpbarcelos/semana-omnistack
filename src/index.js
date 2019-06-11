const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://wpbarcelos:suporte@cluster0-uynwm.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})


app = express()


app.use( require('./routes') )


app.listen(3333)