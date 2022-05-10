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
async function getUsers(filterUser,password){
   
    const messages = await Model.find()
    return messages
}

async function updateUser(id,name,Pcredito,Ventrada,Vsemanal,Vquincenal,Vmensual,Pcontado) {
    const foundUser = await Model.findOne({ _id: id })
    foundUser.name = name
    foundUser.Pcredito = Pcredito
    foundUser.Ventrada = Ventrada
    foundUser.Vsemanal = Vsemanal
    foundUser.Vquincenal = Vquincenal
    foundUser.Vmensual = Vmensual
    foundUser.Pcontado = Pcontado
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