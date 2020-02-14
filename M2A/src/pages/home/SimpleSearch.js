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
          style={{ marginTop: 16, marginBottom: "30px" }}
          type="inner"
          title={<strong>SIMPLE SEARCH</strong>}
        >
          <p>
            <strong>Please login first to begin you search</strong>
          </p>
          <Row gutter={4}>
            <Col span={22} offset={1} style={{ marginBottom: "50px" }}>
              {" "}
              <Form
                id="simpleSearch"
                layout="inline"
                action={action}
                className="login-form"
                method="POST"
                onSubmit={e => {
                  console.log(e);
                }}
                style={{ width: "100%" }}
              >
                <Search
                  prefix={
                    <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  allowClear={true}
                  name="KEYWORD_CL"
                  placeholder="Search Term"
                  enterButton={
                    <Button type="submit" id="searchSubmitBtn">
                      {" "}
                      Search
                    </Button>
                  }
                  onSearch={value =>
                    document.getElementById("simpleSearch").submit()
                  }
                />
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
