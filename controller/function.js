import {
    v4 as uuidv4
} from 'uuid';

let movies = [
    {
        
        "name": "die hard",
        "year": "1999",
        "genre": "action",
        "income": 10000000
      },
      {
        
        "name": "Fast and Furius",
        "year": "2004",
        "genre": "action",
        "income": 2356005
      },
      {
        
        "name": "Harry Potter",
        "year": "2001",
        "genre": "fantastic",
        "income": 623550
      }
]
 export const createMovie=(req, res) => {
    const movie = req.body;

    const movieWithId = {
        ...movie,
        id: uuidv4()
    }

    movies.push(movieWithId)
    res.send(`Movie with name ${movie.name} added the database`)
}

export const getMovies=(req, res) => {
    /*     console.log(movies); */
    res.send(movies);
}

export const getMoviebyId=(req,res)=>{
    const {id}=req.params;
   const foundMovie= movies.find((user)=>user.id===id)
    res.send(foundMovie);
}

export const deleteMovie=(req,res)=>{
    const {id}=req.params;
    movies=movies.filter((user)=>user.id!=id)
    res.send(`Movie with the ${id} deleted`)
}

export const UpdateMovie=(req,res)=> {
    const {id}=req.params;
    const {name,year,genre,income}=req.body;
    const movie=movies.find((user)=>user.id===id);
    if(name)
    movie.name=name; 
    if(year)
    movie.year=year; 
    if(genre)
    movie.genre=genre;
    if(income)
    movie.income=income;
    
res.send(`Movie with the id ${id} changed`)
    

}