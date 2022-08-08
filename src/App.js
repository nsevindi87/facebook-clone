import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import MessageSender from './MessageSender';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        
      </div>
    </div>
  );
}

export default App;
