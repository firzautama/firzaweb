import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Mainan from './components/main';
import { Link } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div>
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Title" scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/resume">ResumeX</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                    <Mainan />
                  
              </Content>
          </Layout>
        </div>
      </div>
    );
  }
}
export default App;
