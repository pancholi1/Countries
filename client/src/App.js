import './App.css';
import './modules/sidebar/showCountry'
import React from 'react';
import {  Route } from 'react-router-dom'
import NavBar from './modules/sidebar/nav'
import CountriesShow from './modules/sidebar/showCountry';
import CountryDetail from './modules/sidebar/CountryDetail';
import Activity from './modules/sidebar/activity';


function App() {
  return (
      <React.Fragment>
        <NavBar></NavBar>
        <Route path ="/home" exact component = {CountriesShow}/>
        <Route path ="/home/:id" component = {CountryDetail}/>
        <Route path="/activity" component = {Activity} />
      </React.Fragment>
      
  );
}

export default App;
