const express = require('express')
const app = express()

//Invocamos a la conexión para la DB
const conexion = require('./database/db')
conexion.once('open', ()=> console.log('Conexión exitosa a MongoDB'))
conexion.on('error', ()=> console.log('El error de conexión es: '+error))

//AdminBro
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro = require('@admin-bro/mongoose')

//Modelos
const User = require('./models/User')
const Post = require('./models/Post')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources: [User, Post]}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)


app.get('/', (req, res)=>{
    res.send('Dashboard con Node')
})

app.listen(3000, ()=>{
    console.log('¡Server UP! en http://localhost:3000/admin')
})