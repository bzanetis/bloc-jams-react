import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
         <div className="masthead mb-auto">
          <nav className="nav nav-masthead justify-content-center">
           <Link to='/'>Landing</Link>
           <Link to='/library'>Library</Link>
          </nav>

          <div className="inner">
           <h1 className="masthead-brand">Bloc Jams</h1>
          </div>
         </div>
        </header>

        <main className= "text-center">
         <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
         </div>
        </main>
      </div>
    );
  }
}

export default App;
