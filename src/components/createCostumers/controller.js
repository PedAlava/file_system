const storage = require('./storage')
function addUser(name,cedula,direccion,empresa,dirEmpresa,i_mensual,email,date,Zona) {
    return new Promise(function (resolve, reject) {
        
       
            const fullMessage ={name: name,cedula:cedula,direccion:direccion,empresa:empresa,dirEmpresa: dirEmpresa,i_mensual:i_mensual,email:email,date:date,Zona:Zona}
            
            console.log("Lista")
            //console.log(fullMessage)
            storage.add( fullMessage)

            return resolve(fullMessage)
        
    })
}
function getUsers(){
    return new Promise((resolve,reject)=>{
        resolve(storage.all())
    })
}

function updateUsers(id,name,cedula,direccion,empresa,dirEmpresa,i_mensual,email,date,Zona) {
    

    return new Promise( async (resolve,reject)=>{
      
        const result = await storage.update(id,name,cedula,direccion,empresa,dirEmpresa,i_mensual,email,date,Zona)
        return resolve(result)
    })
}
module.exports = {
    addUser,
    getUsers,
    updateUsers
}