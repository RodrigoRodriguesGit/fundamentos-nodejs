const { response } = require('express');
const { request } = require('express');
const express = require('express');

const app = express();

app.use(express.json()) 

// localhost:3333

//app.get('/', (request, response) => {
    // 1º Exemplo
    //return response.send('Hello World!');
    // 2º Exemplo
//    return response.json({ message: "Hello World!"});
//});

/**
 * Tipos de Parâmetros
 * 
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body  Params => Os objetos de Inserção/Alteração (JSON)
  */

app.get('/courses', (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post('/courses', (request, response) => {
    const body = request.body;
    console.log(body); 
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// Alteração do Curso 1 para o 6
app.put('/courses/:id', (request, response) => {
    // 1º Exemplo
    //const params = request.params;
    //console.log(params);
    // 2º Exemplo
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

// Alteração do Curso 2 para o 7
app.patch('/courses/:id', (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete('/courses/:id', (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});  

app.listen(3333);