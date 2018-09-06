import React, { Component } from 'react';
import Header  from './header';
import Add from './add';
import Movielist from './movielist';
import Ratingheader from './ratingheader'
import './App.css';

 const movie1={ id:'1f',
   title:'Juste like heaven',
   years:2005,
   image:'https://tse4.mm.bing.net/th?id=OIP.mT7k3fD6ZghDF3Li0hkG9gHaKh&pid=15.1&P=0&w=300&h=300',
   counts:'2',
 }
 const movie2=
 {id:'2f',
   title:'The Fault in Our Stars',
   years:2014,
   image:'https://tse2.mm.bing.net/th?id=OIP.-Drv-lVOwOIM_hWmYVXwogHaLH&pid=15.1&P=0&w=300&h=300',
  counts:'5',
}
const movie3=
{
  id:'3f',
  title:'The  age of Adaline ',
  years:2015,
  image:'https://tse1.mm.bing.net/th?id=OIP.c33lMPlJo4_Y8rksacySLgHaLL&pid=15.1&P=0&w=300&h=300',
 counts:'5',
}
const movie4={
id:'4f',
title:'The Notebook',
  years:2004,
  image:'https://tse2.mm.bing.net/th?id=OIP.rR3ytCJQR5p1g3FME0_TXQHaLH&pid=15.1&P=0&w=300&h=300',
 counts:'3',
}
const movie5=
{ 
   id:'5f',
   title:'I am the Legend',
    years:2007,
    image:'https://tse4.mm.bing.net/th?id=OIP.GC6TTW191QSoDYDOVRk6CQHaKn&pid=15.1&P=0&w=300&h=300',
   counts:'4',
  } 
  const movie6=
  { 
    id:'6f',
    title:'L Étrange Histoire de Benjamin Button',
     years:2018,
     image:'http://cityofstars.free.fr/jackie_chan/l_etrange_histoire_de_benjamin_button_dvd.jpeg',
    counts:'5',
   } 
 const  playliste=[movie1,movie2,movie3,movie4,movie5,movie6]


class App extends Component {
  constructor (props){
  super(props)
    this.state={
      minimumrating:1,
      newmovies: playliste,
      search:' ',
      
      
    }
  }
  onchange=(newRating)=>{
    this.setState({ minimumrating : newRating} )}

 

  changetitle=(newtitle)=>{
    this.setState({search:newtitle})
    
  }
  addmovief=(newmovie)=>{
    this.setState({ newmovies: this.state.newmovies.concat(newmovie)})
  }
  
  

  render() {
    return (
      <div className="App">
      <div className='search'>
        <Header value={this.state.search} onChangee={this.changetitle}/>
        <Ratingheader changehandel={this.onchange} newcount={this.state.minimumrating}/>
        </div>
        
        <Movielist movies={(this.state.newmovies.filter(el=>el.counts>=this.state.minimumrating 
         && el.title.toUpperCase().includes(this.state.search.toUpperCase().trim())))}  addmovief={this.addmovief} /> 
     

       
      </div>
    );
  }
}

export default App;
