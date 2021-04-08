import React from "react";
import { Col, Form, select, Row, Container, Card } from "react-bootstrap";
import { Input } from "reactstrap";
import InputGroup from "react-bootstrap/InputGroup";
export class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "",city:"", state: "", country: "" };

    this.myChangeaddress = this.myChangeaddress.bind(this);
    this.myChangecity = this.myChangecity.bind(this);
    this.myChangestate = this.myChangestate.bind(this);
    this.myChangecountry = this.myChangecountry.bind(this);
  }
  myChangeaddress = (event) => {
    this.props.onaddresschange(event);
  };

  myChangecity = (event) => {
    this.props.oncitychange(event);
  };

  myChangestate = (event) => {
    this.props.onstatechange(event);
  };

  myChangecountry = (event) => {
    this.props.oncountrychange(event);
  };

  render() {
    return (
      <div>
        <br /> <br />
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Card style={{ backgroundColor: "skyblue" }}>
                <Form>
                  <Form.Row>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Address</InputGroup.Text>
                      <Input
                        type="text"
                        onChange={this.myChangeaddress}
                        value={this.props.text}
                        required
                      />
                    </InputGroup>

                    <InputGroup className="mb-3" as={Col} controlId="address">
                      <InputGroup.Text>City</InputGroup.Text>
                      <Input
                        type="text"
                        name="city"
                        onChange={this.myChangecity}
                        placeholder="Enter City"
                      />
                    </InputGroup>
                  </Form.Row>
                  <Form.Row>
                    <InputGroup className="mb-3" as={Col} controlId="address">
                      <InputGroup.Text>State</InputGroup.Text>
                      <Form.Control
                        as="select"
                        name="state"
                        onChange={this.myChangestate}
                        placeholder="Enter state"
                      >
                        <option>Maharashtra</option>
                        <option>Gujarat</option>
                        <option>Rajasthan</option>
                        <option>Clifornia</option>
                        <option>Texas </option>
                        <option>Florida</option>
                        <option>Ontario</option>
                        <option>Alberta</option>
                        <option>Yukon</option>
                        <option> Queensland</option>
                        <option>Tansmania </option>
                        <option>Victoria </option>
                        <option>Berlin </option>
                        <option>Hamburg </option>
                        <option>Saxony </option>
                      </Form.Control>
                    </InputGroup>

                    <InputGroup className="mb-3" as={Col} controlId="address">
                      <InputGroup.Text>country</InputGroup.Text>
                      <Form.Control
                        as="select"
                        defaultValue="Choose..."
                        name="country"
                        onChange={this.myChangecountry}
                      >
                        <option>India</option>
                        <option>United states</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Germany</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Row>
                </Form>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Address;
