import React from "react";
import { Menu, Layout, Icon, Drawer, Button } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class Filter extends React.Component {
  render() {
    return (
      <Sider theme="light" width={200} breakpoint="lg" collapsedWidth="0">
        {" "}
        <Menu mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Filter;
