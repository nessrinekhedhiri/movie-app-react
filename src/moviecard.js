import React, { Component } from 'react';
import Rating from'./rating'

const Moviecard=({movie:{title,image,years,counts}})=>{

    
    return(
        <div className="movie">
        <div className="image" style={{backgroundImage :`url('${image}')`}}>
        <div className='rating'><Rating count={counts}   />
        </div>
        </div>
        <div className="title_year">
        {title}-{years}
        </div>
        </div>
    )
}
export default Moviecard;