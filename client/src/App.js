import './App.css';
import './modules/sidebar/showCountry'
import React from 'react';
import {  Route } from 'react-router-dom'
import NavBar from './modules/sidebar/nav'
import CountriesShow from './modules/sidebar/showCountry';
import CountryDetail from './modules/sidebar/CountryDetail';
import Activity from './modules/sidebar/activity';

import Initation from './modules/sidebar/Initation';


function App() {
  return (
      <React.Fragment>
        <Route path='/' exact component={Initation} />
        <Route path ='/nav' component = {NavBar} />
        <Route path ="/nav/home" exact component = {CountriesShow}/>
        <Route path ="/nav/home/:id" component = {CountryDetail}/>
        <Route path="/nav/activity" component = {Activity} />
       
      </React.Fragment>
      
  );
}

export default App;
