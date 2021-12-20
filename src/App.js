import React from "react";
import GetCat from "./components/GetCat.jsx";
import Refresh from "./components/Refresh.jsx";
import TurnOn from "./components/TurnOn.jsx"
import styled from "styled-components";

const Div = styled.div`
    position: fixed;
    top: 10%;
    left: 50%;
    margin: -50px 0 0 -100px;
`



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBoxEnableChange = this.handleBoxEnableChange.bind(this);
    this.handleBoxRefreshChange = this.handleBoxRefreshChange.bind(this);
    this.state = {
      checked: false,
      value: true
    };
  }

  handleBoxEnableChange(e) {
    this.setState({ checked: !this.state.checked });
  }
  handleBoxRefreshChange(e) {
    this.setState({ value: !this.state.value });
  }

  render() {
    if (!this.state.checked) {
      return (
        <Div>
          <TurnOn
            onBoxChange={this.handleBoxEnableChange}
            checked={!this.state.checked}
          />
          <Refresh
            onBoxRefreshChange={this.handleBoxRefreshChange}
            value={!this.state.value}
          />
          <GetCat
            value={!this.state.value}
          />
        </Div>
      );
    } else {
      return (
        <Div>
          <TurnOn
            onBoxChange={this.handleBoxEnableChange}
            checked={!this.state.checked}
          />
        </Div>
      )
    }
  }
}

export default App;