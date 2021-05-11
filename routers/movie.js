import express from "express"
import {
    createMovie,
    getMovies,
    getMoviebyId,
    deleteMovie,
    UpdateMovie
} from "../controller/function.js"

/* const swaggerUI=require("swagger-ui-express");
const swaggerJSDoc=require("swagger-jsdoc");
const app=express();
const options={
    definition:{
        openapi:"3.0.0",
        info :{
            title:"swagger express api",
            version:"1.0.0"
        },
    },
    apis :["path of express routes"]
}
const swaggerSpec=swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); */
const router = express.Router();


//GET ALL USERS
router.get("/", getMovies)
//ADD A USER WITH ID
router.post("/", createMovie);
//GET A USER WITH ID
router.get(`/:id`, getMoviebyId)
//DELETE USER WITH ID

router.delete(`/:id`, deleteMovie)

//Change User
router.patch(`/:id`, UpdateMovie)
export default router