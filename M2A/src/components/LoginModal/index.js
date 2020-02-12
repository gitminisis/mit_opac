import React from "react";

import { Modal, Button, Form, Input, Radio, Icon } from "antd";
import { login } from "../../services/login";
class LoginModal extends React.Component {
  handleOk = e => {
    login().then(res => {
      console.log(res);
    });
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("henlo");
    console.log(e);
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };
  render() {
    return (
      <Modal
        title="Login"
        centered
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            type="primary"
            onClick={this.handleOk}
          >
            Submit
          </Button>
        ]}
      >
        {" "}
        <Form
          onSubmit={_ => this.handleSubmit}
          id="logon-form"
          layout="vertical"
          action="http://mit.minisisinc.com/scripts/mwimain.dll?logon&application=UNION_VIEW&LANGUAGE=144&file=[MIT_ROOT]home.html&cookie=BOOKMARK"
          method="POST"
        >
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              name="USERNAME"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              name="USERPASSWORD"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default LoginModal;
