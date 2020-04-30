import React from "react";
import { Input } from "antd";

import { Button } from "antd";

class InputBtn extends React.Component {
  state = {
    inputVal: ""
  };

  onChangeInput = e => {
    console.log(e.target.value);
    this.setState({ inputVal: e.target.value });
  };
  onClickButton = () => {
    this.setState({ inputVal: "" });
    this.props.onClickButton(this.state.inputVal);
  };
  render() {
    return (
      <div className="input">
        <div className="header">
          <h2>To Do List!</h2>
        </div>

        <Input
          size="large"
          style={{ width: 200, margin: 8, height: 28 }}
          onChange={this.onChangeInput}
          value={this.state.inputVal}
        />

        <Button
          type="primary"
          icon="plus"
          style={{
            width: 50,
            height: 33,
            textAlign: "left"
          }}
          onClick={this.onClickButton}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default InputBtn;
