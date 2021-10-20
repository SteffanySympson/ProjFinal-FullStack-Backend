const mongoose = require('mongoose');

function Connection(url, user, pass, banco){
    mongoose.connect('mongodb+srv://ToDoListAdm:RyWnACqJGwNm2QhX@cluster0.ioeni.mongodb.net/todolist?retryWrites=true&w=majority', {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Base de dados conectada com sucesso!!');
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Connection;