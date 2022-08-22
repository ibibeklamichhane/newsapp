//98a7ae5e7fac41ad9bca57ca0111e4f2
import React, { Component ,useState} from "react";
import LoadingBar from 'react-top-loading-bar';


import { BrowserRouter as Router, Switch, Route,Routes ,Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import News from "./components/News";
//import NewsItem from './components/NewsItem';
import Spinner from "./components/spinner";

export default class App extends Component {
  api=process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
  }
  setProgress=(progress) => {
    this.setState({progress: progress})
  
}

 
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
        />
          <Routes>
          <Route exact path="/" element = {<News setProgress={this.setProgress} api={this.api} key="general" pageSize = {5} country = "in" category = "general"/>}/>
          <Route exact path="/business" element = {<News setProgress={this.setProgress} api={this.api} key="business" pageSize = {5} country = "in" category = "business"/>}/>
          <Route exact path="/entertainment" element = {<News setProgress={this.setProgress} api={this.api} key="entertainment" pageSize = {5} country = "in" category = "entertainment"/>}/>
          <Route exact path="/general" element = {<News setProgress={this.setProgress} api={this.api} key="general" pageSize = {5} country = "in" category = "general"/>}/>
          <Route exact path="/health" element = {<News setProgress={this.setProgress} api={this.api} key="health" pageSize = {5} country = "in" category = "health"/>}/>
          <Route exact path="/science" element = {<News setProgress={this.setProgress} api={this.api} key="science" pageSize = {5} country = "in" category = "science"/>}/>
          <Route exact path="/sports" element = {<News setProgress={this.setProgress} api={this.api} key="sports" pageSize = {5} country = "in" category = "sports"/>}/>
          <Route exact path="/technology" element = {<News setProgress={this.setProgress} api={this.api} key="technology" pageSize = {5} country = "in" category = "technology"/>}/>

          


          </Routes>
        </Router>
      </div>
    );
  }
}
