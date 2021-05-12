import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./routers/movie.js"
import { version } from "uuid";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';



const app=express();
const PORT=3001;


  


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use(bodyParser.json());

app.use("/movies",movieRoutes);

app.get("/",(req,res)=>{
    console.log("TEST")
    res.send("Hello from homepage")
});

app.listen(PORT,()=>console.log(`Server running on board http://localhost:${PORT}`))