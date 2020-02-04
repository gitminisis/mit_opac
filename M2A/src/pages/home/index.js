import React from "react";
import PageLayout from "../../components/Layout";
import { OnPageContext } from "../../context";
import { Row, Col, Layout, Card, Button } from "antd";
const { Content } = Layout;
import "./index.css";
import SimpleSearch from "./SimpleSearch";

class Home extends React.Component {
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <OnPageContext.Provider value="2">
        <PageLayout>
          <Content>
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
              <SimpleSearch searchLink={searchLink} />
            </Card>
          </Content>
        </PageLayout>
      </OnPageContext.Provider>
    );
  }
}

export default Home;
