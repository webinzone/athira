import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Label from './components/Label';
import Page from './components/Page';
//import Navbar from './components/Navbar';


function App() {
  return (


       <div className="App">

      <header className="App-header">
    


               <Page> Home Appointments </Page>

          <Button>Hello, Storybook!</Button>
         <Header>My App</Header>

       <Label>hiiii</Label>
      </header>

 
    

    </div>

  );
}

export default App;
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #DAF7A6;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
