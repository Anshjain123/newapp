
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = ()=> {
  const [progress, setprogress] = useState(10)
  let pageSize = 15;  
  // state = {
  //   progress : 10,  
  // }
  const setProgress=(progress)=>{
    setprogress(progress); 
  }
  const apikey = process.env.REACT_APP_NEWS_API;
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element = {<News  setProgress = {setProgress} apikey = {apikey} key = "general" pageSize = {pageSize} country = "in" category = "general"/>}/>
          <Route exact path="/general" element = {<News setProgress = {setProgress} apikey = {apikey} key = "general" pageSize = {pageSize} country = "in" category = "general"/>}/>
          <Route exact path="/science" element = {<News setProgress = {setProgress} apikey = {apikey} key = "science" pageSize = {pageSize} country = "in" category = "science"/>}/>
          <Route exact path="/business" element = {<News setProgress = {setProgress} apikey = {apikey} key = "business" pageSize = {pageSize} country = "in" category = "business"/>}/>
          <Route exact path="/entertainment" element = {<News setProgress = {setProgress} apikey = {apikey} key ="entertainment" pageSize = {pageSize} country = "in" category = "entertainment"/>}/>
          <Route exact path="/sports" element = {<News setProgress = {setProgress} apikey = {apikey} key ="sports" pageSize = {pageSize} country = "in" category = "sports"/>}/>
          <Route exact path="/technology" element = {<News setProgress = {setProgress} apikey = {apikey} key ="technology" pageSize = {pageSize} country = "in" category = "technology"/>}/>           
          <Route exact path="/health" element = {<News setProgress = {setProgress} apikey = {apikey} key ="health" pageSize = {pageSize} country = "in" category = "health"/>}/>
        </Routes>
          
        </Router>
      </div>
    )
  }

  export default App