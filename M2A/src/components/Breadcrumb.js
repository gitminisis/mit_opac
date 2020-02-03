import React from "react";
import { Breadcrumb } from "antd";

class PageBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Breadcrumb style={{ margin: "16px 0 20px 10px" }}>
        {this.props.pages.map((page, index) => (
          <Breadcrumb.Item key={index}>{page}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
}

export default PageBreadcrumb;
