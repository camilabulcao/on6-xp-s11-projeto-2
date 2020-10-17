//Nomes dos métodos para implementação:
const models = require('../models/maravilhosas-models')
const { response } = require('../app')

//getMaravilhosas
const getMaravilhosas = (request, response) => {
    console.log(request.url)
    const maravilhosas = models.selectAllData()
    response.status(200).json(maravilhosas)
}
//getMaravilhosaById
const getMaravilhosaById = (request, response) => {
    const id = parseInt(request.params.id)
    const selectDataById = models.selectDataById(id)
    response.status(200).send(selectDataById) //não está filtrando pelo id
}
//addMaravilhosa 
const addMaravilhosa = (request, response) =>{
    const{name, photo, subtitle, about, phrase, history, addedBy} = request.body
    const novaMaravilhosa = models.insertData(name, photo, subtitle, about, phrase, history, addedBy)
    response.status(200).send(novaMaravilhosa)

}
//updateMaravilhosa 

//deleteMaravilhosa

module.exports ={
    getMaravilhosas,
    getMaravilhosaById, 
    addMaravilhosa
}