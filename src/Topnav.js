import React, { Component } from 'react';
import './App.css';

class Topnav extends Component {
  // in this context, my link mappings could be 'globals';
  render() {
    return (
      <div class="topnav">
        <a href={about}>About Me</a>
        <a>Blog</a>
        <a>Github</a>
        <a>Contact</a>
        <a>Home</a>
      </div>
    )
  }
}
