import React from "react";
import PageLayout from "../../components/Layout";
import {
  OnPageContext,
  PageViewContext,
  BreadcrumbContext
} from "../../context";
import { xmlToJson, isGrid } from "../../services";
import SearchBar from "../../components/Search";
import { Row, Col, Layout, Icon, Menu, Button } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
import Filter from "./Filter";
import TopBar from "../../components/TopBar";
import GridView from "./GridView";
import ListView from "./ListView";
import {} from "../../context";
class Library extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#summary");
    let json = xmlToJson(xml, [
      "summary_xml.record.item",
      "summary_xml.record.item.item_author_group",
      "summary_xml.record.item.item_subject_group",
      "summary_xml.filters.div.xml.filter",
      "summary_xml.filters.div.xml.filter.item_group"
    ]);

    this.state = {
      data: json.summary_xml,
      isGrid: isGrid(json.summary_xml),
      count: json.summary_xml.bookmark.count
    };
  }
  render() {
    let { data, isGrid, count } = this.state;
    console.log(data);
    return (
      <OnPageContext.Provider value="3">
        <BreadcrumbContext.Provider value={["Home", "Summary"]}>
          <PageLayout>
            <Row>
              <Col xs={0} lg={6}>
                <Filter />
              </Col>
              <Col xs={24} lg={18}>
                <Content style={{ padding: "0 24px", minHeight: "60vh" }}>
                  <PageViewContext.Provider value={isGrid ? "grid" : "list"}>
                    <TopBar data={data} />
                  </PageViewContext.Provider>
                  {isGrid ? <GridView data={data} /> : <ListView data={data} />}
                </Content>
              </Col>
            </Row>
          </PageLayout>
        </BreadcrumbContext.Provider>
      </OnPageContext.Provider>
    );
  }
}

export default Library;
