import React from "react"
import Card from 'react-bootstrap/Card';

function Exhibit() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Find IP Address</Card.Title>
            <Card.Text>
              The IP Address is: 
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

export default Exhibit;