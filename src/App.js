import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsMarquee from './components/NewsMarquee';
import NewsSlider from './components/NewsSlider';

const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('us');
  return (
    <div>
      <Router>
        <NavBar class="nav-link active" />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <NewsMarquee  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment"  />
        <Switch>
          <Route exact path="/"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" /></Route>
          <Route exact path="/business"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" /></Route>
          <Route exact path="/entertainment"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" /></Route>
          <Route exact path="/health"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" /></Route>
          <Route exact path="/science"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" /></Route>
          <Route exact path="/sports"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" /></Route>
          <Route exact path="/technology"><NewsSlider setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" /></Route>
        </Switch>
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" class="nav-link active" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" /></Route>
        </Switch>
        <Footer />

      </Router>
    </div>
  )
}

export default App;
