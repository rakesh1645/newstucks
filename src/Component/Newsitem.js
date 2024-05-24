import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export class Newsitem extends Component {
 
  render() {
    
    let {title,description ,imageurl,newsurl,author,date}=this.props;
    return (
      <div >
         <Card>
        
      <Card.Img variant="top" src={!imageurl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIuxlC0c5gqk/v1/1200x800.jpg":imageurl}/>
      <Card.Body>
      
        <Card.Title>{title}   </Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Card.Text>by {!author?"Unknown":author}  updated {new Date(date).toGMTString()}</Card.Text>
        <Button variant='dark' href={newsurl} target='_blank' >Read More</Button>
       
      </Card.Body>
    
    </Card>
      </div>
    )
  }
}

export default Newsitem
