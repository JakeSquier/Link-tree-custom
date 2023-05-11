import React from "react";
import '../styles/head.css'

function Head(){

    return(
        <>
            <div id="rightHead">
                <p>2:54</p>
            </div>
            <div id="centerHead">
                <div id="headPill"></div>
            </div>
            <div id="leftHead">
                <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1.7em', height: '1.2em', verticalAlign: 'middle', fill: 'white', overflow: 'hidden'}} viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style={{width: '2.7em', height: '1.7em', verticalAlign: 'middle', fill: 'white', overflow: 'hidden'}} viewBox="0 0 1024 1024" version="1.1"><path style={{color: 'black'}} d="M792 288H128c-52.8 0-96 43.2-96 96v256c0 52.8 43.2 96 96 96h664c52.8 0 96-43.2 96-96V384c0-52.8-43.2-96-96-96z m40 352c0 22-18 40-40 40H128c-22 0-40-18-40-40V384c0-22 18-40 40-40h664c22 0 40 18 40 40v256z m96-230.8v205.6c32 0 64-55.4 64-102.8s-32-102.8-64-102.8z"/><path d="M768 384H152c-13.2 0-24 10.8-24 24v208c0 13.2 10.8 24 24 24h616c13.2 0 24-10.8 24-24V408c0-13.2-10.8-24-24-24z"/></svg>
            </div>
        </>
    )
}

export default Head