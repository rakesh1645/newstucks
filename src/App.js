import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import statement
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class App extends Component {
  pagesize=6
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/sports' element={<News category='Sports' key='Sports'country='in' pagesize={this.pagesize}/>} />
            <Route exact path='/Bussiness' element={<News category='Business'key='Business' country='in' pagesize={this.pagesize}/>} />
            <Route exact path='/Technologies' element={<News category='Technology'key='Technology' country='in' pagesize={this.pagesize}/>} />
            <Route exact path='/Technologies' element={<News category='Technology'key='Technology' country='in' pagesize={this.pagesize}/>} />
            <Route exact path='/Science' element={<News category='Science'key='Science' country='us' pagesize={this.pagesize}/>} />
            <Route exact path='/health' element={<News category='Health'key='Health' country='in' pagesize={this.pagesize}/>} />
            <Route exact path='/Entertainment' element={<News category='Entertainment' key='Entertainment'country='in' pagesize={this.pagesize}/>} />
            <Route exact path='/' element={<News category='General' country='in'key='Sports' pagesize={this.pagesize}/>} />
            
          </Routes>
        </Router>     
      </div>
    );
  }
}
