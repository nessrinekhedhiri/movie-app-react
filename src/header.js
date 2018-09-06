import React, { Component } from 'react'

const Header=({value,onChangee})=>{

   return(
       <div className='movie-header'  style={{    marginLeft: '18%', marginTop: '6%'}}>
    
       <input type="text" value={value} onChange={(e)=> onChangee(e.target.value)}placeholder='Type  movie name to search...........'/>
       <button>Search</button>
    
   </div>
   )}
export default  Header;