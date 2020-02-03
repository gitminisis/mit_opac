import React from "react";

import { Layout, Menu, Row, Col } from "antd";
const { Header } = Layout;
import { OnPageContext } from "../context";
import { LINK } from "../services";
class PageHeader extends React.Component {
  render() {
    return (
      <>
        <Header style={{ backgroundColor: "white" }}>
          {" "}
          <Row gutter={0}>
            <Col lg={10}>Archive Collection</Col>
            <Col lg={14}>Search Bar</Col>
          </Row>
        </Header>
      </>
    );
  }
}
PageHeader.contextType = OnPageContext;
export default PageHeader;
