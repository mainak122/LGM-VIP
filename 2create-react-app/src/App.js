import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  
  function getUserData() {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(json => setData(json['data']))
      .catch(error => console.error(error));
  }

  return (
    
    <div className="App">
      <NavigationBar getUserData={getUserData} />
      {data ?  
      <>
      
      <header className="App-header">
      <Container>
          <Row>
      {data.map((data)=>{
       return (
            <Col sm>
              <ProfileCard email={data.email} name={`${data.first_name} ${data.last_name}`} avatar={data.avatar} />
            </Col>
      );})}
          </Row>
      </Container>
      
      </header>
      </>
      : <h1 style={{marginTop: '50px'}}>{'PRESS "GET USER" BUTTON TO FETCH DATA'}</h1>}
    </div>
  );
}

export default App;
