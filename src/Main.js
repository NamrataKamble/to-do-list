import React from "react";
import InputBtn from "./InputBtn";
import ItemList from "./ItemList";
import { Layout } from "antd";

const { Content } = Layout;

class Main extends React.Component {
  state = {
    list: []
  };

  onClickButton = val => {
    const { list } = this.state;
    this.setState({
      list: [...list, val]
    });
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <div className="inputBtn">
            <InputBtn onClickButton={this.onClickButton} />
          </div>

          <div className="listItem" style={{ display: "flex", height: 250 }}>
            <Content>
              <ItemList list={this.state.list} />
            </Content>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Main;
