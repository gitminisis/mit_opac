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
import { JSON_ARRAY_FIELD } from "../../services/index";
class Summary extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#summary_xml");
    console.log(xml);
    let json = xmlToJson(xml, JSON_ARRAY_FIELD);

    this.state = {
      data: json.report,
      next: json.report.next_page ? json.report.next_page.a._href : null,
      try: 0
    };
    console.log(this.state.data);
  }
  handleScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      // you're at the bottom of the page
      let item = this.state.data.item;
      item = item.concat(...item);
      let data = this.state.data;
      data.item = item;
      this.setState({ data: data });
    }
    // let lastLi = document.querySelector(".summaryDataCard:last-child");
    // var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    // var pageOffset = window.pageYOffset + window.innerHeight;
    // console.log(lastLiOffset, pageOffset);
    // if (pageOffset / 1.5 > lastLiOffset) {
    //   let item = this.state.data.item;
    //   console.log(item.concat(...item));
    // }
  };
  loadRecord = _ => {
    console.log("123");
    // this.scrollListener = window.addEventListener("scroll", e => {
    //   this.handleScroll(e);
    // });
    let { next } = this.state;
    if (next) {
      console.log(next);
      axios.get(next).then(res => {
        let dataXML = res.data;
        let newDocument = document
          .createRange()
          .createContextualFragment(dataXML);
        let xml = newDocument.querySelector("#summary_xml");

        let json = xmlToJson(xml, JSON_ARRAY_FIELD);
        console.log(json);

        let newItem = json.report.item;
        let newNext = json.report.next_page
          ? json.report.next_page.a._href
          : null;
        let item = this.state.data.item;
        item = item.concat(...newItem);
        let data = this.state.data;
        data.item = item;
        this.setState({ data: data, next: newNext });
      });
    }
  };
  fakeLoad = a => {
    if (this.state.try < a) {
      axios.get(this.state.next).then(res => {
        let dataXML = res.data;
        let newDocument = document
          .createRange()
          .createContextualFragment(dataXML);
        let xml = newDocument.querySelector("#summary_xml");

        let json = xmlToJson(xml, [
          "report.item",
          "report.item.item_box_group",
          "report.item.item_subject_group",
          "report.filters.div.xml.filter",
          "report.filters.div.xml.filter.item_group"
        ]);
        console.log(json);

        let newItem = json.report.item;

        let item = this.state.data.item;
        item = item.concat(...newItem);
        let data = this.state.data;
        data.item = item;
        this.setState({ data: data, try: this.state.try + 1 });
      });
    }
  };
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }
    let { data } = this.state;
    console.log(data.item.length);
    // this.loadRecord();

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
                    <Breadcrumb.Item href="#">SEARCH RESULTS</Breadcrumb.Item>
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
                  {data.item.map(item => (
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
