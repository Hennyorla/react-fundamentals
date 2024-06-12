// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const App = () =>  {
  const firstName = "Eniola"; 

  return (
    <div className="App">
      <div className="container mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Image />
            <Card.Title><Name /></Card.Title>
            <Card.Text><Price /></Card.Text>
            <Card.Text><Description /></Card.Text>
          </Card.Body>
        </Card>
        <div className="mt-3">
          {firstName ? (
            <>
              <p>Hello, {firstName}!</p>
              <img src="https://via.placeholder.com/100" alt="Personalized" />
            </>
          ) : (
            <p>Hello, there!</p>
          )}
        </div>
      </div>
    </div>
  );
}






export default App;






