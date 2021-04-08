import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onStudentformClick = this.onStudentformClick.bind(this);
    this.onFacultyformClick = this.onFacultyformClick.bind(this);
  }
  onStudentformClick() {
    this.props.handleMenuClick("Studentform");
  }
  onFacultyformClick() {
    this.props.handleMenuClick("Facultyform");
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="red">
          <Navbar.Brand href="#home">School Management</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={this.onStudentformClick}> Student</Nav.Link>
            <Nav.Link onClick={this.onFacultyformClick}>Faculty</Nav.Link>
            <Nav.Link >Department</Nav.Link>

            <DropdownButton id="dropdown-basic-button" title="Select Department">
              <Dropdown.Item href="#/Student">Student</Dropdown.Item>
              <Dropdown.Item href="#/Faculty">Faculty</Dropdown.Item>
              <Dropdown.Item href="#/Department">Department</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
