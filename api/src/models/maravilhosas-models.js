let dados = require('../data/data.json')
const controller = require('../controllers/maravilhosas-controller')
const { getMaravilhosaById } = require('../controllers/maravilhosas-controller')

// selectAllData
const selectAllData = () => {
    return dados
}

//selectDataById
const selectDataById = (id) => {
    const byId = dados.find(item => item.id == id)
    if (byId){
        return byId
    } else {
        return `Id nao encontrado`
    }

}

//insertData
const obterNovoValor = (array) => { //para fazer o incremento
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }
const insertData = (name, photo, subtitle, about, phrase, history, addedBy) =>{
    let novaMaravilhosa = {
        id: obterNovoValor(dados),
        name: name,
        photo: photo, 
        subtitle: subtitle,
        about: about,
        phrase: phrase,
        history: history,
        addedBy: addedBy

    }
    dados.push(novaMaravilhosa)
}

//updateData

//deleteData

module.exports ={
    selectAllData,
    selectDataById,
    insertData
}