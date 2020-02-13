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
import SideBar from "./SideBar";
import SortBar from "./SortBar";
import Filter from "./Filter";

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
  ajax = i => {
    var req = new XMLHttpRequest();
    req.open(
      "GET",
      "http://lmawebtest.westeurope.cloudapp.azure.com/scripts/mwimain.dll?logon&application=UNION_VIEW&language=144&file=[lma]home.html",
      false
    );
    req.send(null);
    var headers = req.getAllResponseHeaders().toLowerCase();
    console.log(headers);
    axios
      .get(
        "http://lmawebtest.westeurope.cloudapp.azure.com/scripts/mwimain.dll?logon&application=UNION_VIEW&language=144&file=[lma]home.html",
        "SEARCH_TERM=test"
      )
      .then(res => {
        console.log(i, res);
        console.log(res.headers);
      });
  };
  render() {
    // // this.ajax();
    // for (let i = 0; i < 50; i++) {
    //   // console.log(i);
    //   this.ajax(i);
    // }
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
