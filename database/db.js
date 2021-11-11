const mongoose = require('mongoose')
const uri = 'mongodb://localhost/base_adminbro'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion
