import React from 'react'
import Header from '../components/Header/Index'
import Footer from '../components/Footer/Index'
import ChatBoat from '../components/ChatBoat/Index'


export default function Layout(props) {
    return (
       <>
       <Header/>
        {props.children}
        <Footer/>
        
        <ChatBoat/>
       </>
    )
}