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

          <Row>
            <Col span={22} offset={1}>
              {" "}
              <SimpleSearch searchLink={searchLink} />
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default Home;
