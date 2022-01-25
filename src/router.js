import React, { Component } from 'react'
import {  Routes , Route, } from "react-router-dom";
import Home from './components/Home/Index'
import AboutUs from './InnerPages/AboutUs/Index';
import Wip from './InnerPages/WIP/Index';
import HelpScout from './InnerPages/HelpScout/Index';


export default class Index extends Component {
    render() {
        return (
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} /> 
            <Route path="/wip" element={<Wip/>} /> 
            <Route path="/help-scout" element={<HelpScout/>} />          
        </Routes>
        )
    }
}
