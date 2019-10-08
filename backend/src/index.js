const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json()); // aceita json no body
app.use(express.urlencoded({ extended: true })); // envio de arquivo
app.use(morgan("dev")); //lib de log

app.use(require("./Routes"));

app.listen(3000);
