import React from "react";
import PageLayout from "../../components/Layout";

import { Row, Col, Layout, Card, Button } from "antd";
const { Content } = Layout;
import SimpleSearch from "./SimpleSearch";
import LoginModal from "../../components/LoginModal";
import { isLogged } from "../../services/authentication";
class Home extends React.Component {
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }
    let isLoggedOn = isLogged();
    console.log(isLoggedOn);
    return (
      <PageLayout>
        <Content>
          <LoginModal visible={!isLoggedOn}></LoginModal>
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
                <Button style={{ width: "100%" }}>Laboratory History</Button>
              </Col>
              <Col span={6}>
                <Button style={{ width: "100%" }}>Exhibitions</Button>
              </Col>
            </Row>
          </Card>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                className="homeImage"
                alt="Banner Image"
                src="/m2a/src/assets/images/MWI_Header.png"
              />
            }
          >
            <Row>
              <Col span={22} offset={1}>
                {" "}
                <SimpleSearch searchLink={searchLink} />
              </Col>
            </Row>
          </Card>
        </Content>
      </PageLayout>
    );
  }
}

export default Home;
