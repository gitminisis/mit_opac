import React from "react";
import { Card, Table } from "antd";
const { Column } = Table;
import Tree from "../../components/Tree";
const data = [
  {
    key: "1",
    string: "test",
    results: "5"
  }
];
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
          >
            <Tree />
          </Card>
        </div>
        <div>
          {" "}
          <Card
            className="sideBarCard"
            title="Search History"
            style={{ width: "100%" }}
            bodyStyle={{ textAlign: "center" }}
          >
            <p>
              To return to a previous search, click on the search string below
            </p>
            <Table dataSource={data} pagination={false} bordered={true}>
              <Column title="String" dataIndex="string" key="string"></Column>
              <Column
                title="Results"
                dataIndex="results"
                key="results"
              ></Column>
            </Table>
            <p>Search History is only retained for the current session</p>
          </Card>
        </div>
        <div>
          <Card
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
