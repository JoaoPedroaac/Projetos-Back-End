const express = require('express');
const server = express();
server.use(express.json());

const cursos = ['node JS', 'JavaScript', 'PHP', 'React Show', 'VueJs'];


server.use ((req, res, next)=>{
    console.log('Essa função foi chamada!')

    return next();    
});

server.get('/curso', (req, res)=> {
    return res.json(cursos);
})


server.get('/curso/index', (req, res)=> {
    const { index } = req.params;
    return res.json(cursos[index]);

})

server.post('/curso', (req, res)=> {
    const { novo_curso } = req.body;
    cursos.push(novo_curso);

    return res.json(cursos);
})

server.put('/curso/:index', (req, res)=>{
const { index } = req.params;
const { curso } = req.body;

cursos[index] = curso;

return res.json(cursos);

});

server.delete('/curso/:index', (req, res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message: "Curso deletado com sucesso"});   

}); 

server.listen(3000);
