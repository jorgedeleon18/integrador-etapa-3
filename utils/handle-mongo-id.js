
const handleMongoId = (elemento) => {
    const clave = '_id'
elemento = JSON.parse(JSON.stringify(elemento))
if (Array.isArray(elemento)) {
    for (let i = 0; i < elemento.length; i++) {
            elemento[i].id = elemento[id][clave]
    delete elemento[id][clave]
    }
} else {
    
    elemento.id = elemento[clave]
    delete elemento[clave]
}
return elemento
}

export default handleMongoId