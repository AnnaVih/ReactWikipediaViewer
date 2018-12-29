import React, { Component } from 'react'

import WikipediaHeader from './components/WikipediaHeader'
import UserSearch from './components/UserSearch'
import RandomArticle from './components/RandomArticle'
import WikipediaFooter from './components/WikipediaFooter'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <WikipediaHeader/>
        <div className="wikipedia_wrapper">
            <UserSearch />
            <h1>OR</h1>
            <RandomArticle/>
        </div>
        <WikipediaFooter/>
      </React.Fragment>
    );
  }
}

export default App;
