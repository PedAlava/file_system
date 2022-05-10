const storage = require('./storage')
function addUser(name,Pcredito,Ventrada,Vsemanal,Vquincenal,Vmensual,Pcontado) {
    return new Promise(function (resolve, reject) {
        
       
            const fullMessage ={name: name,Pcredito:Pcredito,Ventrada:Ventrada,Vsemanal:Vsemanal,Vquincenal: Vquincenal,Vmensual:Vmensual,Pcontado:Pcontado,date: new Date()}
            
            console.log("Lista")
            //console.log(fullMessage)
            storage.add( fullMessage)

            return resolve(fullMessage)
        
    })
}
function getUser(User,Password){
    return new Promise((resolve,reject)=>{
        resolve(storage.list(User,Password))
    })
}

function updateItem(id,name,Pcredito,Ventrada,Vsemanal,Vquincenal,Vmensual,Pcontado) {
    

    return new Promise( async (resolve,reject)=>{
      
        const result = await storage.update(id,name,Pcredito,Ventrada,Vsemanal,Vquincenal,Vmensual,Pcontado)
        return resolve(result)
    })
}

function getUsers(){
    return new Promise((resolve,reject)=>{
        resolve(storage.all())
    })
}
module.exports = {
    addUser,
    getUser,
    getUsers,
    updateItem
}