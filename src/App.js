import React from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person'

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <Person age="20">
          My name is Gab
        </Person>
      </div>
    );
  }
}

export default ShoppingList;
