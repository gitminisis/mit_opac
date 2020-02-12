import React from "react";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;
import { OnPageContext } from "../context";
import SearchBar from "./SearchBar";
class PageHeader extends React.Component {
  render() {
    return (
      <>
        <Header style={{ backgroundColor: "white" }}>
          {" "}
          <Row gutter={0}>
            <Col lg={8}></Col>
            <Col lg={16}>
              <SearchBar />
            </Col>
          </Row>
        </Header>
      </>
    );
  }
}
PageHeader.contextType = OnPageContext;
export default PageHeader;
