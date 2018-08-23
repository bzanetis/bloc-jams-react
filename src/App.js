import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">

      <header className="masthead mb-auto container">
        <div className="inner">
          <h2 className="masthead-brand row">Bloc Jams</h2>
          <nav className="nav nav-masthead justify-content-center row">
            <a className="nav-link active" href='/'>Landing</a>
            <a className="nav-link active" href='/library'>Library</a>
          </nav>
         </div>
        </header>

      <div className="row width-100">
        <div className="App-routes">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </div>
       </div>
     </div>
    );
  }
}

export default App;
