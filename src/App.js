//Built-in React
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import Footer from './components/Footer';



class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: 'Brendan Rottmund',
    headerLinks: [
      { title: 'Home', path: '/'},
      { title: 'About', path: '/about'},
      { title: 'Contact', path: '/contact'},
      { title: 'Resume', path: '/resume'},
    ],
    home: {
      title: 'New skills,',
      subTitle: 'New career,',
      text: 'Bootcamp and beyond!'
    },
    about: {
      title: 'About Me'
    },
    contact: {
      title: 'Contact Me'
    },
    resume: {
      title: 'Resume'
    }
  }
}
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Brendan Rottmund</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
              <Switch>
                <Route exact path="/" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              </Switch>  
              <Switch>
                <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
              </Switch>
              <Switch>
                <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
              </Switch>
              <Switch>
                <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} />} />
              </Switch>
          <Footer />

        </Container>
      </Router>
    );
  }  
}

export default App;
