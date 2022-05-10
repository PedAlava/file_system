const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('../createCostumers/controller')

router.use( express.static('public'))

router.get('/', function (req, res, next) {
  
  controller.getUsers().then(
    (fullMessage) => {
    console.log(fullMessage)
    response.success(req, res, fullMessage, 201)
}).catch((error) => {
    console.log(error);
    response.error(req, res, 'Error simulado', 500, error)
})
})
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
  }

  router.post('/',  function (req, res, next) {
    console.log(req.body)
    controller.addUser(req.body.name,req.body.cedula,req.body.direccion,req.body.empresa,req.body.dirEmpresa,req.body.i_mensual,req.body.email,req.body.date,req.body.Zona).then(
        (fullMessage) => {
        console.log(fullMessage)
        //response.success(req, res, fullMessage, 201)
    }).catch((error) => {
        console.log(error);
        response.error(req, res, 'Error simulado', 500, error)
   })
    res.redirect('/')
  })
module.exports = router