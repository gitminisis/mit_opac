import React from "react";
import {
  Card,
  Input,
  Form,
  Icon,
  Button,
  Checkbox,
  Row,
  Col,
  Modal
} from "antd";
const { Search } = Input;

import Tree from "../../components/Tree";
class SimpleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
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

  render() {
    let action = this.props.searchLink;
    return (
      <>
        <Card
          bodyStyle={{ textAlign: "center" }}
          style={{ marginTop: 16 }}
          type="inner"
          title="SIMPLE SEARCH"
        >
          <p>Please login first to begin you search</p>
          <Row gutter={4}>
            <Col span={22} offset={1}>
              {" "}
              <Form
                layout="inline"
                action={action}
                className="login-form"
                method="POST"
                onSubmit={e => {
                  console.log(e);
                }}
              >
                <Col xs={24} lg={18}>
                  <Form.Item
                    wrapperCol={{ xs: 24, lg: 24 }}
                    style={{ width: "100%" }}
                  >
                    <Input
                      onPressEnter={true}
                      allowClear={true}
                      name="KEYWORD_CL"
                      prefix={
                        <Icon
                          type="search"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="text"
                      placeholder="Search Keyword"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={6}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Search
                    </Button>
                  </Form.Item>
                </Col>
              </Form>
            </Col>
          </Row>

          <Col gutter={36}>
            <Col span={8}>
              <Button style={{ width: "75%" }} onClick={this.showModal}>
                Browse
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "75%" }}>Advanced Search</Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "75%" }}>Help</Button>
            </Col>
          </Col>
        </Card>
        <Modal
          footer={null}
          title="Browse"
          visible={this.state.visible}
          style={{ width: "500px" }}
          onCancel={this.handleCancel}
        >
          <Tree />
        </Modal>
      </>
    );
  }
}

export default SimpleSearch;
