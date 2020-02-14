import React from "react";
import PageLayout from "../../components/Layout";
import { xmlToJson } from "../../services";
import {
  Row,
  Col,
  Layout,
  Card,
  Button,
  Table,
  Breadcrumb,
  Descriptions
} from "antd";
const { Column, ColumnGroup } = Table;
const { Content } = Layout;
import axios from "axios";
import LoginModal from "../../components/LoginModal";
import { isLogged } from "../../services/authentication";
import Tree from "../../components/Tree";
import SideBar from "../../components/SideBar";
import SortBar from "./SortBar";
import Filter from "./Filter";
import Data from "./Data";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#summary_xml");
    console.log(xml);
    let json = xmlToJson(xml, [
      "summary_xml.record.item",
      "summary_xml.record.item.item_box_group",
      "summary_xml.record.item.item_subject_group",
      "summary_xml.filters.div.xml.filter",
      "summary_xml.filters.div.xml.filter.item_group"
    ]);

    this.state = {
      data: json.summary_xml,

      count: json.summary_xml.bookmark.count
    };
    console.log(this.state.data);
  }

  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }
    let { data } = this.state;
    console.log(data);
    return (
      <PageLayout>
        <Content>
          {/* <LoginModal visible={!isLoggedOn}></LoginModal> */}

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
                    padding: "18px 15px 17px 15px"
                  }}
                >
                  {" "}
                  <Breadcrumb separator="">
                    <Breadcrumb.Item>HOME</Breadcrumb.Item>
                    <Breadcrumb.Separator>></Breadcrumb.Separator>
                    <Breadcrumb.Item>SEARCH RESULTS</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col
                  span={24}
                  style={{ padding: "20px 15px 0px 15px", fontSize: "16px" }}
                >
                  <p>
                    Your search for <strong>{data.search_statement}</strong>{" "}
                    returned <strong>{data.record_count}</strong> results.
                  </p>
                </Col>
                <Col span={24} style={{ padding: "0 15px 20px 15px" }}>
                  <SortBar />
                </Col>
                <Col span={18} style={{ padding: "0 15px 20px 15px" }}>
                  {data.records.item.map(item => (
                    <Data data={item} bordered={true} />
                  ))}
                </Col>
                <Col
                  span={6}
                  style={{
                    backgroundColor: "#EBECEE",
                    height: "400px"
                  }}
                >
                  <Button id="searchFilterButton">SEARCH FILTER</Button>
                  <Filter data={data.filters.div.xml.filter} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default Summary;
