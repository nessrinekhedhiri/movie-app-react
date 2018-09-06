import React, { Component } from 'react'
import Moviecard from './moviecard';
import './App.css'
import Add from './add';
const Movielist=(props)=>{
    return(
      
      <div className="movie-list">
      {
          props.movies.map(el => <Moviecard key={el.id} movie={el} />)
      }
      <Add  addmovief={props.addmovief}/>
  </div> 
   
 
   )
}
export default Movielist;