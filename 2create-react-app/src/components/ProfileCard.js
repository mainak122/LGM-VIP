import Card from 'react-bootstrap/Card';

function ProfileCard(props) {
  return (
    <Card style={{ width: '20rem', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
      <Card.Img style={{width: '140px', height: '140px', borderRadius: '100px', marginTop: '20px'}} variant="top" src={props.avatar} />
      <Card.Body>
        <Card.Title style={{color: '#000', fontSize: '1.5em'}}>{props.name}</Card.Title>
        <Card.Title style={{color: '#000', fontSize: '0.5em'}}>{props.email}</Card.Title>
        {/* <Card.Text style={{color: '#000', fontSize: '0.7em'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;