import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import Address from "./Address";

class Facultyform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      facid: "",
      address: "facultyaddress",
      city: "",
      state: "",
      country: "",
    };
    this.onFacultySubmit = this.onFacultySubmit.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.myChangeaddress = this.myChangeaddress.bind(this);
    this.myChangecity = this.myChangecity.bind(this);
    this.myChangestate = this.myChangestate.bind(this);
    this.myChangecountry = this.myChangecountry.bind(this);
  }

  myChangeHandler5 = (event) => {
    this.setState({ name: event.target.value });
  };
  myChangeHandler1 = (event1) => {
    this.setState({ facid: event1.target.value });
  };
  myChangeHandler2 = (event2) => {
    this.setState({ aadharid: event2.target.value });
  };

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  myChangeaddress = (e) => {
    this.setState({ address: e.target.value });
  };

  myChangecity = (e3) => {
    this.setState({ city: e3.target.value });
  };

  myChangestate = (e1) => {
    this.setState({ state: e1.target.value });
  };

  myChangecountry = (e2) => {
    this.setState({ country: e2.target.value });
  };

  onFacultySubmit() {
    alert(
      this.state.name +
        "   " +
        this.state.facid +
        "  " +
        this.state.aadharid +
        "  " +
        this.state.address +
        "  " +
        this.state.city +
        "  " +
        this.state.state +
        "  " +
        this.state.country
    );
  }

  render() {
    return (
      <Card
        border="dark"
        style={{
          width: "30rem",
          alignItems: "center",
          backgroundColor: "skyblue",
        }}
      >
        <Card.Body>
          <Card.Title> Faculty Registration Form </Card.Title>
          <Form>
            <Col xs={15}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName1">
                  <Form.Label> Faculty Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter faculty_name"
                    onChange={this.myChangeHandler5}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridFaculty">
                  <Form.Label> Faculty ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter faculty_id"
                    onChange={this.myChangeHandler1}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridName1">
                  <Form.Label> Aadhar ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter aadhar_id"
                    onChange={this.myChangeHandler2}
                  />
                </Form.Group>
              </Form.Row>
              <Address
                text={this.state.address}
                onaddresschange={this.myChangeaddress}
                oncountrychange={this.myChangecountry}
                onstatechange={this.myChangestate}
                oncitychange={this.myChangecity}
              ></Address>

              <Button
                variant="warning"
                type="submit"
                onClick={this.onFacultySubmit}
              >
                Submit Form{" "}
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Facultyform;
