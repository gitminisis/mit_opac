import React from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
import { OnPageContext } from "../context";
import { LINK } from "../services";
class PageSider extends React.Component {
  render() {

    return (
      <Sider breakpoint="xl" collapsedWidth="0" width={250}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.context]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="1" onClick={_ => (window.location = LINK.home)}>
            <Icon type="home" theme="filled" />
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={_ => (window.location = LINK.museum)}>
            <Icon type="bank" theme="filled" />
            Museum
          </Menu.Item>
          <Menu.Item key="3" onClick={_ => (window.location = LINK.library)}>
            <Icon type="read" theme="filled" />
            Library
          </Menu.Item>
          <Menu.Item key="4" onClick={_ => (window.location = LINK.archive)}>
            <Icon type="container" theme="filled" />
            Archive
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
PageSider.contextType = OnPageContext;
export default PageSider;
