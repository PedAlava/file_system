const Model = require('./model')


async function addUser(user){
    console.log("await")
    
    const myUser = new Model(user)
    //console.log(myUser)
    await myUser.save()
    /*await myUser.save()*/

}
async function getUser(filterUser,password){
    let filter = {}
    if(filterUser != null){
        filter = {cedula:filterUser,Zona:password}
    }
    const messages = await Model.find(filter)
    return messages
}
async function getUsers(){
    
    const messages = await Model.find()
    return messages
}


async function updateUser(id,name,cedula,direccion,empresa,dirEmpresa,i_mensual,email,date,Zona) {
    const foundUser = await Model.findOne({ _id: id })
    foundUser.name = name
    foundUser.cedula = cedula
    foundUser.direccion = direccion
    foundUser.empresa = empresa
    foundUser.i_mensual = i_mensual
    foundUser.dirEmpresa = dirEmpresa
    foundUser.email = email
    foundUser.date = date
    foundUser.Zona = Zona
    const newMessage = foundUser.save()
    return newMessage
}

function deleteUser(id) {
    return Model.deleteOne({
        _id: id
    })
}


module.exports ={
    add: addUser,
    list:getUser,
    all:getUsers,
    update:updateUser,
    delete:deleteUser
}