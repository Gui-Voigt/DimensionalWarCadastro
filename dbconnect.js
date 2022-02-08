//Biblitecas de Setup
var mongoose = require("mongoose");
    mongoose.Promise = global.Promise;

//Conectando ao banco de dados:
var uri = "mongodb://localhost/DW";
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = function (){
    mongoose.connect(uri, options);

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectado ao banco de dados"));
}