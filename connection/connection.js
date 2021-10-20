const mongoose = require('mongoose');

function Connection(url, user, pass, data){
    mongoose.connect(`${url}/${data}`, {
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