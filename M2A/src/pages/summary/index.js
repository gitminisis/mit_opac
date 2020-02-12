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

import LoginModal from "../../components/LoginModal";
import { isLogged } from "../../services/authentication";
import Tree from "../../components/Tree";
import SideBar from "./SideBar";
import SortBar from "./SortBar";
class Summary extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#summary_xml");
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
            bodyStyle={{ padding: 0 }}
            cover={
              <img
                className="homeImage"
                alt="Banner Image"
                src="/m2a/src/assets/images/MWI_Header.png"
              />
            }
          >
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
                      padding: "19px 15px 19px 15px"
                    }}
                  >
                    {" "}
                    <Breadcrumb separator="">
                      <Breadcrumb.Item>HOME</Breadcrumb.Item>
                      <Breadcrumb.Separator>></Breadcrumb.Separator>
                      <Breadcrumb.Item>SEARCH RESULTS</Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                  <Col span={24} style={{ padding: "20px 15px 10px 15px" }}>
                    <p>
                      Your search for {data.search_statement} returned{" "}
                      {data.record_count} results.
                    </p>
                  </Col>
                  <Col span={24} style={{ padding: "0 15px 20px 15px" }}>
                    <SortBar />
                  </Col>
                  <Col span={24}>
                    {data.records.item.map(item => (
                      <Descriptions
                        bordered
                        column={1}
                        style={{ marginTop: "30px" }}
                      >
                        <Descriptions.Item
                          label="LEVEL"
                          style={{ height: "30px" }}
                        >
                          {item.item_level_desc.toUpperCase()}
                        </Descriptions.Item>
                        <Descriptions.Item label="Title">
                          <a href={item.item_link}> {item.item_title}</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Reference Code">
                          {item.item_id}
                        </Descriptions.Item>
                        <Descriptions.Item label="Restrictions">
                          {item.item_restrictions}
                        </Descriptions.Item>
                        <Descriptions.Item label="Date">
                          {item.item_date}
                        </Descriptions.Item>
                        <Descriptions.Item label="Location/Box">
                          {item.item_box_group ? (
                            item.item_box_group.map(box => {
                              return box.item_box_no ? (
                                <p>Location: {box.item_box_no}</p>
                              ) : (
                                <p>Box: {box.item_container}</p>
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </Descriptions.Item>
                      </Descriptions>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Content>
      </PageLayout>
    );
  }
}

export default Summary;
