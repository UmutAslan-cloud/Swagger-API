import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./routers/movie.js"
import { version } from "uuid";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc';


const app=express();
const PORT=3001;

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes*.js'], // files containing annotations as above
  };
  
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));;



app.use(bodyParser.json());

app.use("/movies",movieRoutes);

app.get("/",(req,res)=>{
    console.log("TEST")
    res.send("Hello from homepage")
});

app.listen(PORT,()=>console.log(`Server running on board http://localhost:${PORT}`))