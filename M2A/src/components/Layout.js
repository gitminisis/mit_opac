import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";
import { Layout, Menu, Row, Col, Card, Button } from "antd";
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
              <Card>
                <Row gutter={24}>
                  <Col span={6}>
                    <Button style={{ width: "100%" }}>Search</Button>{" "}
                  </Col>
                  <Col span={6}>
                    <Button style={{ width: "100%" }}>
                      Library &amp; Archives Catalog
                    </Button>{" "}
                  </Col>
                  <Col span={6}>
                    <Button style={{ width: "100%" }}>
                      Laboratory History
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button style={{ width: "100%" }}>Exhibitions</Button>
                  </Col>
                </Row>
              </Card>
              <Card
                hoverable
                style={{ width: "100%" }}
                bodyStyle={{ padding: 0 }}
                cover={
                  <img
                    className="homeImage"
                    alt="Banner Image"
                    src="/m2a/src/assets/images/MWI_Header.png"
                  />
                }
              >
                {this.props.children}
              </Card>
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
