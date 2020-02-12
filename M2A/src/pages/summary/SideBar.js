import React from "react";
import { Card, Table } from "antd";
const { Column } = Table;
import Tree from "../../components/Tree";
import { getSearchHistory } from "../../services/searchHistory";
import SearchHistory from "./SearchHistory";

class SideBar extends React.Component {
  render() {
    return (
      <>
        <div>
          {" "}
          <Card
            className="sideBarCard"
            title="Browse By Collection"
            style={{ width: "100%" }}
            bordered={false}
          >
            <Tree />
          </Card>
        </div>
        <div>
          {" "}
          <SearchHistory />
        </div>
        <div>
          <Card
            bordered={false}
            className="sideBarCard"
            title="Your Account"
            style={{ width: "100%" }}
            bodyStyle={{ textAlign: "center" }}
          ></Card>
        </div>
      </>
    );
  }
}

export default SideBar;
