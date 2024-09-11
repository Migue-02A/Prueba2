import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();

app.use(cors());

const Info = () =>{
    try {
        const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
    } catch(error){
        console.log(error);
    }
};

const mostrar = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch(error){
        console.log(error);
    }
;}

app.get("/Laboratorio", (req, res) =>{
    res.send("Hola esta es la API")
}) 

app.get("/",(req,res) => {
    const data = Info();
    res.json(data.Laboratorio)
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is listening on: ", port);
});