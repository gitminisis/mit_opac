import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";
import { Layout, Menu, Row, Col } from "antd";
import Breadcrumb from "./Breadcrumb";
const { Content } = Layout;
import { BackTop } from "antd";
import { BreadcrumbContext } from "../context";
class PageLayout extends React.Component {
  render() {
    return (
      <Row style={{ background: "darkgray" }}>
        <Col span={18} offset={3}>
          <Layout>
            <Header />

            <Layout
              id="main-content"
              style={{ backgroundColor: "white", padding: "50px" }}
            >
              {/* <Breadcrumb pages={this.context} /> */}
              {this.props.children}
              <BackTop />
            </Layout>

            <Footer />
          </Layout>
        </Col>
      </Row>
    );
  }
}
PageLayout.contextType = BreadcrumbContext;
export default PageLayout;
