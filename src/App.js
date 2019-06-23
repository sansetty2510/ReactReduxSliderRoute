import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction'
import Users from './routes/user/users';
import Contact from './routes/contact/contact';
import Home from './routes/home/home';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <Router>
        <div>
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Sidebar</h3>
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                  <i className="fas fa-align-left"></i>
                  <span>Toggle Sidebar</span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-align-justify"></i>
                </button>
              </div>
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users/" component={Users} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
