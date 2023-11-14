import React, { useState } from 'react'
import {  getMovies } from '../services/fakeMovieService'


export default function Movies() {
    const [movies,setMovies] = useState(getMovies())
    const [count,setCount] = useState(movies.length)
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const filterMovies = (searchTerm) => {
        const filtered = movies.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
      };


      const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        filterMovies(searchTerm);
      };

    const sortByRate = () => {
      const newTable =  [...movies].reverse();
      console.log(newTable);
      setMovies(newTable);
      setFilteredMovies(newTable)
    }
    //* function sortByRate () {}
    const deleteMovie = (el) => {
        const myMovies = movies.filter((m)=> m._id !== el._id)
        setMovies(myMovies);
        setFilteredMovies(myMovies);
        setCount(count-1)

    }

  
  return (
    <div className='container'>
        
        {/* { condition ? execute1 : excute 2} */}
        {count === 0 ?  <h1 className='text-center m-5'>no movies left!</h1>  
        :
        <>
        <h1 className="text-center m-2">there are  { count } movies !</h1>
        <div>
        <h4 className=''>Search By Name</h4>
        <input placeholder='Exemple : Terminator' className='form-control-sm' type='text' onChange={handleInputChange} />
        </div>
        <table className='table table-striped'>
           
    <thead>
        <tr>
            <th>Title
            <button className='btn btn-link' onClick={sortByRate}>
                <img width={"15px"} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAgbipBM3w6IuXx3FlILekgTCIvz4YHlRrw&usqp=CAU"
                 alt="trie movies"  />
                 </button>

            </th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
            filteredMovies.map((el)=>
                (<tr key={el._id}>
                    <td>{el.title}</td>
                    <td>{el.genre.name}</td>
                    <td>{el.numberInStock}</td>
                    <td>{el.dailyRentalRate}</td>
                    <td><button onClick={()=>deleteMovie(el)} className='btn btn-danger'>Delete</button></td>
                </tr>)
            )
        }
    </tbody>
        </table>
        </>
        }
 
    </div>
  )
}
