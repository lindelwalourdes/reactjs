import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';



class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Portfolio Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/test">Testing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route exact path="/" component={Home} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/test" component={Testing} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
class Testing extends Component {
  render() {
    return <div>Well done Girl!!</div>
  }
}
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

export default App;
