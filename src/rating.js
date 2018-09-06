import React, { Component } from 'react';

 const Rating=({count,onchange=()=>{}}) =>{
 let stararray=[]
    for ( let i=0;i<5;i++){
    if(i<count){
    stararray.push(<span onClick={()=>onchange(i+1)} key={i}>★</span>)}
    else 
    stararray.push(<span onClick={()=>onchange(i+1)} key={i}>☆</span>)
}
return (<div>{stararray}</div>)
} 
export default Rating;