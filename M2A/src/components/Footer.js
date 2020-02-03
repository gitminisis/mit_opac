import React from "react";
import { List, Layout } from "antd";
const { Footer } = Layout;
import minisis from "../assets/images/minisis.png";

const footerNavigation = [
  {
    title: "Archival Description",
    href: ""
  },
  {
    title: "Digital Assets"
  },
  {
    title: "Library & Archives Catalog"
  },
  {
    title: "Exhibitions"
  }
];

class PageFooter extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
        <p>
          All content within the archives collections is For Laboratory Use Only
          unless otherwise noted.
        </p>
        <p>
          Have a question? See someone you know? Have material for us? Contact
          the Archives at x2312 |
          <a href="mailto:archives@ll.mit.edu">archives@ll.mit.edu</a>
        </p>
        <img src={minisis} style={{ width: "200px", height: "auto" }} />
        <p>&copy; 2019 Minisis Inc. All Rights Reserved.</p>
        <List
          grid={{ gutter: 4, column: 4 }}
          dataSource={footerNavigation}
          renderItem={item => <List.Item>{item.title}</List.Item>}
        />
      </Footer>
    );
  }
}

export default PageFooter;
