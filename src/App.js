import React from "react";
import "../src/App.css";
import Header from "./components/Header";
import Facultyform from "./components/Facultyform";
import Studentform from "./components/Studentform";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleScreen: "Studentform",
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick(menu) {
    this.setState({ visibleScreen: menu });
  }
  render() {
    return (
      <div className="App">
        <Header handleMenuClick={this.handleMenuClick} />

        {this.state.visibleScreen == "Studentform" && <Studentform />}
        {this.state.visibleScreen == "Facultyform" && <Facultyform />}
      </div>
    );
  }
}

export default App;
