import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Enquire from './components/Hero/enquire';
import Linkedin from './components/Hero/linkedin';
import Home from './components/Pages/HomePage';
import AboutUs from './components/Pages/AboutUsPage';
import ContactUs from './components/Pages/ContactUsPage';
import BlogPage from './components/Pages/BlogPage';
import CaseStudies from './components/Pages/CaseStudiesPage';
import { Content } from './content';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      AllContent: []
    }
  }

  componentDidMount() {
    Content.getEntries()
      .then((response) => {
        // console.log(response)
        this.setState({ AllContent: response.items })
        // console.log(this.state.AllContent)
      }).catch(console.error)
  }
  render() {
    if (!this.state.AllContent.length) return null;
    return (
      <div className="App">
        <Enquire enquireSide={this.state.AllContent[1].fields} />
        <Linkedin linkedinSide={this.state.AllContent[1].fields} />
        <Switch>
          <Route exact path="/" ><Home homeContent={this.state.AllContent} /></Route>
          <Route exact path="/home"><Home homeContent={this.state.AllContent} /></Route>
          <Route path="/aboutus" ><AboutUs /></Route>
          <Route path="/contactus"><ContactUs /></Route>
          <Route path="/blogs"><BlogPage /></Route>
          <Route path="/casestudies"><CaseStudies /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

