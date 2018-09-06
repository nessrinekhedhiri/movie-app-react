import React, { Component } from 'react';
import './App.css'
 
const Add=({addmovief=()=>{}})=>{ 
 return(
 <img className='btn' src='http://www.free-icons-download.net/images/add-video-icon-55108.png'onClick={()=>addmovief({id:prompt('id'),
 title:prompt('titile?'),
  years:prompt('years?'),
  image:'http://icons.iconarchive.com/icons/dryicons/aesthetica-2/128/movie-track-add-icon.png',
 counts:prompt('star'),})}/>
 )}
export default Add