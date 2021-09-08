const express = require('express');
const router = express.Router();
const Todolist = require('../models/todolist');

router.get('/', async (req, res) => {
    await Todolist.find({})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send("Algo de errado com sua solicitação, vamos tentar novamente?");
        console.log(err);
    })
});

router.get('/findById/id', async (req, res) => {
    await Todolist.find({_id : req.params.id})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send("Algo de errado com sua solicitação, vamos tentar novamente?");
        console.log(err);
    })
});

router.get('/findByName/:name', async (req, res) => {
    await Todolist.find({_id : req.params.name})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send("Algo de errado com sua solicitação, vamos tentar novamente?");
        console.log(err);
    })
});

router.post("/add", async (req, res) => {
    console.log(req.body);
    await Todolist.create(req.body)
    .then(() => {
        res.status(200).send("Tarefa adicionada com sucesso!");
    })
    .catch((err) => {
        res.status(400).send("Algo de errado com sua solicitação, vamos tentar novamente?");
        console.error(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Todolist.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Tarefa atualizada com sucesso.");
    })
    .catch((err) => {
        res.status(400).send("Algo de errado com sua solicitação, vamos tentar novamente?");
        console.log(err);
    })
});

router.delete("/delete/:id", async (req, res) => {
    await Todolist.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Tarefa deletada com sucesso!");
    })
    .catch((err) => {
        res.status(400).send("Algo de errado com sua solicitação, vamos tentar novamente?");
        console.log(err);
    })
});

module.exports = router;