import React from 'react';
import logo from './logo.svg';
import { MessageList } from "./components/side-message-menu/messageLists"
import './App.css';

function App() {
  return (
    <div className="App">
       {MessageList()}
    </div>
  );
}

export default App;
