import React from "react";
import logo from './logo.svg';
export function Header (){
    const aStyle={
        display: 'inline-block',
        color: 'blue',
        margin:'7px',
        textDecoration: 'none'
    }
    return(
        <div style={{backgroundColor:'#ccc'}}>
            <a href=""style={aStyle}>Home</a> |&nbsp;
            <a href="" style={aStyle}>React</a >|&nbsp;
            <a href="" style={aStyle}>React Native</a >|&nbsp;
        </div>
    )
}
export function Content(){
    return(
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/>React Native</h2>
            <br/><br/><br/>
        </div>
    )
}
export function ReactLogo(){
    return(
        <div style={{textAlign:'center',}}>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}
export const Footer=()=>{
    return(
        <div style={{textAlign:'center'}}>
            &Copy;{new Date().getFullYear()} All right reserved
        </div>
    )
}
export function Test(){
    return(
        <div>Hello</div>
    )

}