import React, { Component } from "react";
import "../App.css"
import { Button, Form, Col, Container, Card, Row } from "react-bootstrap";
import { Input } from "reactstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Address from "./Address";

export class Studentform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "Pragya",
      lname: "",
      fid: "",
      dname: "",
      mno: "",
      mail: "",
      address: "studentaddress",
      pin: "441614",
      cname: "",
      age: "",
      age_upper: "",
      errormessage: "",
      validated: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({
      validated: true,
    });
    return false;
    alert (
      "Student Name: " +
        this.state.fname +
        " " +
        this.state.lname +
        "\rRoll Number: " +
        this.state.fid +
        "\rDepartment Name: " +
        this.state.dname +
        "\rCollege Name: " +
        this.state.cname +
        "\rMobile Number: " +
        this.state.mno +
        "\rAge: " +
        this.state.age_upper +
        "\rEmail: " +
        this.state.mail
    );
  };

  onAdd = () => {
    const count = parseInt(this.state.age);
    this.setState({ age: count + 1 });
    setTimeout(() => {
      this.setState({ age_upper: this.state.age });
    }, 3000);
  };

  handleFName = (event) => {
    event.preventDefault();
    this.setState({
      fname: event.target.value,
    });
  };
  handleLName = (event) => {
    event.preventDefault();
    this.setState({
      lname: event.target.value,
    });
  };

  handleFId = (event) => {
    event.preventDefault();
    this.setState({
      fid: event.target.value,
    });
  };

  handlDName = (event) => {
    event.preventDefault();
    this.setState({
      dname: event.target.value,
    });
  };

  handleMno = (event) => {
    event.preventDefault();
    this.setState({
      mno: event.target.value,
    });
  };

  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
      mail: event.target.value,
    });
  };

  handleCity = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value,
    });
  };
  handleState = (event) => {
    event.preventDefault();
    this.setState({
      state: event.target.value,
    });
  };
  handlePin = (event) => {
    event.preventDefault();
    this.setState({
      pin: event.target.value,
    });
  };
  handleAdd = (event) => {
    event.preventDefault();
    this.setState({
      add: event.target.value,
    });
  };

  handleCName = (event) => {
    event.preventDefault();
    this.setState({
      cname: event.target.value,
    });
  };
  handleAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    setTimeout(() => {
      this.setState({ age_upper: event.target.value });
    }, 2000);

    let val = event.target.value;
    let err = "";

    if (!Number(val)) {
      err = <h5> age must be a number</h5>;
    }

    this.setState({ errormessage: err });
  };

  render() {
    return (
      <div>
        <br /> <br />
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="5" lg="8" xl="8">
                <Card
                  className="mx-6"
                  style={{
                    backgroundColor: "skyblue",
                    color: "white",
                    width: 1250,
                    marginLeft: -255,
                  }}
                >
                  <Card.Header>
                    <h4>Student Registration Form </h4>
                  </Card.Header>
                  <Card.Body className="p-8">
                    <Form
                      noValidate
                      validated={this.state.validated}
                      onSubmit={this.handleSubmit}
                    >
                      <Form.Row>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Student Name</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Input
                            type="text"
                            name="fname"
                            onChange={this.handleFName}
                            placeholder="First Name"
                            required
                          />
                          <Input
                            type="text"
                            name="lname"
                            onChange={this.handleLName}
                            placeholder="Last Name"
                            required
                          />
                        </InputGroup>
                      </Form.Row>
                      <Form.Row></Form.Row>

                      <Form.Row style={{ width: 1100 }}>
                        <InputGroup
                          className="mb-3"
                          as={Col}
                          controlId="formPhone"
                        >
                          <InputGroup.Text>Roll Number</InputGroup.Text>
                          <Input
                            type="number"
                            name="fid"
                            onChange={this.handleFId}
                            placeholder="Enter Roll Number"
                            required
                          />
                        </InputGroup>

                        <InputGroup
                          className="mb-3"
                          as={Col}
                          controlId="formPhone"
                        >
                          <InputGroup.Text variant="info">
                            Department
                          </InputGroup.Text>
                          <Input
                            type="text"
                            name="dname"
                            onChange={this.handlDName}
                            placeholder="Enter Department Name"
                            required
                          />
                        </InputGroup>
                      </Form.Row>

                      <Form.Row style={{ width: 1100 }}>
                        <InputGroup
                          className="mb-3"
                          as={Col}
                          controlId="formPhone"
                        >
                          <InputGroup.Text variant="info">
                            College
                          </InputGroup.Text>
                          <Input
                            type="text"
                            name="cname"
                            onChange={this.handleCName}
                            placeholder="Enter College Name"
                            required
                          />
                        </InputGroup>
                        <InputGroup
                          className="mb-3"
                          as={Col}
                          controlId="formPhone"
                          style={{ width: 100 }}
                        >
                          <InputGroup.Text variant="info">Age</InputGroup.Text>
                          <Input
                            type="text"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleAge}
                            placeholder="Enter age"
                            required
                          />
                        </InputGroup>
                        {this.state.errormessage}
                      </Form.Row>

                      <Form.Row style={{ width: 1100 }}>
                        <InputGroup
                          className="mb-3"
                          as={Col}
                          controlId="formPhone"
                        >
                          <InputGroup.Text>Mobile Number</InputGroup.Text>
                          <Input
                            type="number"
                            name="mno"
                            onChange={this.handleMno}
                            placeholder="Enter Mobile No."
                            minLength="10"
                            maxLength="12"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                          />
                        </InputGroup>

                        <InputGroup
                          className="mb-3"
                          as={Col}
                          controlId="formPhone"
                        >
                          <InputGroup.Text>Email Id</InputGroup.Text>
                          <Input
                            type="email"
                            name="mail"
                            onChange={this.handleEmail}
                            placeholder="Enter Email id"
                            required
                          />
                        </InputGroup>
                      </Form.Row>

                      <Address text={this.state.address} />

                      <Button variant="info" type="submit">
                        {" "}
                        Submit{" "}
                      </Button>
                      <Button
                        variant="info"
                        onClick={this.onAdd}
                        style={{ marginLeft: 30 }}
                      >
                        {" "}
                        add{" "}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Form>
          <h5 variant="outline-info">fname:{this.state.fname} </h5>
          <h5 variant="outline-info">lname:{this.state.lname} </h5>
          <h5 variant="outline-info">fid:{this.state.fid} </h5>
          <h5 variant="outline-info">dname:{this.state.dname} </h5>
          <h5 variant="outline-info">cname:{this.state.cname} </h5>
          <h5 variant="outline-info">
            Age:{this.state.age_upper}{" "}
            {this.state.age_upper > 18 ? (
              <h5>Eligible</h5>
            ) : (
              <h5> Not Eligible</h5>
            )}
          </h5>
          <h5 variant="outline-info">Mail:{this.state.mail} </h5>
          <h5 variant="outline-info">Address:{this.state.add} </h5>
          <h5 variant="outline-info">city:{this.state.city} </h5>
        </Form>
      </div>
    );
  }
}

export default Studentform;
