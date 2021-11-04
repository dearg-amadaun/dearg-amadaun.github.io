import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name:</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Your Message:</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

            <Button class="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent!</p>}
            {this.state.emailSent === false && <p className="d-inline error-msg">Something Went Wrong!</p>}

          </Form>
        </Content>
      </div>
    );
  }
}


// const Example = (props) => {
//   return (
//     <div>
//       <h3>Anchors </h3>
//       <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
//       <ListGroup>
//         <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
//         <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
//         <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
//         <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
//         <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
//       </ListGroup>
//       <p />
//       <h3>Buttons </h3>
//       <ListGroup>
//         <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
//         <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
//         <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
//         <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
//         <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
//       </ListGroup>
//     </div>
//   );
// }

export default ContactPage;