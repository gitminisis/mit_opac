import React from "react";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;
import { OnPageContext } from "../context";
import SearchBar from "./SearchBar";
class PageHeader extends React.Component {
  render() {
    return (
      <>
        <Header
          style={{
            backgroundColor: "white",
            paddingTop: "30px",
            paddingBottom: "20px"
          }}
        >
          {" "}
          <Row gutter={0}>
            <Col
              lg={8}
              id="banner"
              style={{ cursor: "pointer" }}
              onClick={_ =>
                (window.location =
                  "http://mit.minisisinc.com/scripts/mwimain.dll?get&file=[MIT_ROOT]home.html")
              }
            >
              ARCHIVES <br /> COLLECTIONS
            </Col>
            <Col lg={16}>
              <SearchBar />
            </Col>
          </Row>
        </Header>
      </>
    );
  }
}
PageHeader.contextType = OnPageContext;
export default PageHeader;
