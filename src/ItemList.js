import React from "react";
import { List, Icon } from "antd";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="list" style={{ justifyContent: "left", marginLeft: 0 }}>
      <ul className="item-list">
        {props.list.map(item => (
          <li>
            <Icon type="border" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;

//const data = ["Go to the bank", "Clean your room", "Be awesome !"];
//class ItemList extends React.Component {
// state = {
//   initialList: ["Go to the bank", "Clean your room", "Be awesome !"]
// };

// updateList = e => {
//   const { initialList } = this.State;
//   const newItem = "test";

//   this.setState({
//     initialList: [...this.state.initialList, newItem]
//   });
// };
// render() {
//   const { initialList } = this.state;
//   return (
//     //<div className="itemList">
