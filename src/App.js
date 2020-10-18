import React, { useEffect } from 'react';
import './App.css';
import store from './store'
import axios from 'axios'
import Chat from './components/chats'
import { createSession } from "./actions/watson";


if (localStorage.session) {
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session_id"];
}

function App() {
  useEffect(() => {
    // Check if there session
    if (!localStorage.session) {
        // Create
        store.dispatch(createSession());
    }
  });

  return ( 
      <div className = "container" > 
      <h1>Hello World</h1>
      { /* Insert Chat Component HERE! */ } 
      <Chat />
      </div> 
  );
  }

export default App;
