//Setup
const mongoose = require("mongoose");
const logins = require("./logins");
const DBUSER = logins.DBUSER;
const DBPASS = logins.DBPASS;


const uri = `mongodb+srv://${DBUSER}:${DBPASS}@cluster0.g3y4t.mongodb.net/APIDB?retryWrites=true&w=majority`
const configs = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = () => mongoose.connect(uri, configs)
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectado ao banco de dados"))
    
    



