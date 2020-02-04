import React from "react";
import { Card, Input, Form, Icon, Button, Checkbox, Row, Col } from "antd";
const { Search } = Input;
class SimpleSearch extends React.Component {
  render() {
    let action = this.props.searchLink;
    return (
      <Card
        bodyStyle={{ textAlign: "center" }}
        style={{ marginTop: 16 }}
        type="inner"
        title="SIMPLE SEARCH"
      >
        <p>Please login first to begin you search</p>
        <Row gutter={4}>
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
                    <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
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
        </Row>
        <Row gutter={36}>
          <Col span={8}>
            <Button style={{ width: "75%" }}>Browse</Button>
          </Col>
          <Col span={8}>
            <Button style={{ width: "75%" }}>Advanced Search</Button>
          </Col>
          <Col span={8}>
            <Button style={{ width: "75%" }}>Help</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default SimpleSearch;
