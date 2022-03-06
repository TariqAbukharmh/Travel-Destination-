import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
import React from 'react';
 

function Home(props){

    return(
        
        <>  

        <Header/>

        <Tours data = {props.data}/>

        <Footer/>

        </>
        
        
    )
}

export default Home;