import React from 'react';
import './App.css';

import Header from './components/Header';


class App extends React.Component {
  render(){
    return (
      <div className="App">
      <header><br/>
        <form id="my_app">
                 <Header>SRS MANAGER</Header>

          <input type="text" placeholder="Enter UserName" />
          <input type="text" placeholder="Enter Password" /><br/>
          <input type="button" value="LogIn" onClick={this.onSubmit} /><br/>
        </form>
      </header>
     </div>
      );
  }
}

export default App;
