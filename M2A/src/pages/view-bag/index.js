import React from "react";
import PageLayout from "../../components/Layout";
import { Row, Col, Layout, Card, Button, Empty, Breadcrumb } from "antd";

const { Content } = Layout;
import SideBar from "../../components/SideBar";
class ViewBag extends React.Component {
  render() {
    return (
      <PageLayout>
        <Content>
          <Row gutter={0}>
            <Col span={6}>
              <SideBar />
            </Col>
            <Col span={18}>
              <Row gutter={0}>
                {" "}
                <Col
                  span={24}
                  style={{
                    background: "#CED1D0",
                    padding: "18px 15px 14px 15px"
                  }}
                >
                  {" "}
                  <Breadcrumb separator="" id="breadcrumb">
                    <Breadcrumb.Item
                      href={`${
                        document.getElementById("session-id").innerText
                      }?get&file=[MIT_ROOT]home.html`}
                    >
                      HOME
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>></Breadcrumb.Separator>
                    <Breadcrumb.Item href="#">SAVED BAG</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col span={24} style={{ padding: "0 15px 20px 15px" }}></Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default ViewBag;
