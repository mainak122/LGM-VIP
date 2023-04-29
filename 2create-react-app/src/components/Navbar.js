import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

function NavigationBar(props) {
    return (
      <>
        <Navbar bg="light" variant="light" sticky='top'>
          <Container>
            <Stack direction="horizontal" gap={3}>
                <Navbar.Brand href="#home">MAINAK</Navbar.Brand>
                <div className="vr" />
                <Button className='border' variant="dark" onClick={props.getUserData}>GET USER</Button>
            </Stack>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavigationBar;