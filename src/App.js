import {
  BrowserRouter as Router,
  Route, Routes 
} from "react-router-dom";
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
 

export default class App extends Component {
  apikey = "ca99211496bd43c0869102853e5cb8ba"
  render() {
    return (
      <div>
       
        <Router>
          

          
        <Navbar/>
        
        <Routes>

            <Route exact path="/" element={<News  apikey={this.apikey} key="general" country="in" category="general"/>} />
            <Route exact path="/business" element={<News apikey={this.apikey}  key="business" country="in" category="business"/>} />

            <Route exact path="/entertainment" element={<News  apikey={this.apikey} key="entertainment" country="in" category="entertainment"/>} />

            <Route exact path="/general" element={<News  apikey={this.apikey} key="general" country="in" category="general"/>} />
            <Route exact path="/health" element={<News apikey={this.apikey}  key="health" country="in" category="health"/>} />



            <Route exact path="/science" element={<News apikey={this.apikey}  key="science" country="in" category="science"/>} />

            <Route exact path="/sports" element={<News apikey={this.apikey}  key="sports" country="in" category="sports"/>} />
                

            <Route exact path="/technology" element={<News  apikey={this.apikey} key="technology" country="in" category="technology"/>} />


</Routes>
          
        </Router> 
      </div>
    )
  }
}
