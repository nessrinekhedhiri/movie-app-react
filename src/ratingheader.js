import React, { Component } from 'react';
import Rating from './rating'
import './App.css'
const Ratingheader= ({newcount,changehandel})=>{
    return(<div className='rating-search'>
    <span className='rating-header-text'>Minimum rating</span> 
    <span> <Rating count={newcount} onchange={changehandel} /></span>
    </div>)
}
export default  Ratingheader;