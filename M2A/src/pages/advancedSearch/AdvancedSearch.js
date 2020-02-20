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
  Modal,
  DatePicker
} from "antd";
const { Search } = Input;

import Tree from "../../components/Tree";
import { SEARCH_TERMS } from "../../services/advanceSearch";
import FieldSelect from "./FieldSelect";
class AdvancedSearch extends React.Component {
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
    let sessionId = document.getElementById("session-id").innerText;
    let action = `${sessionId}?UNIONSEARCH&APPLICATION=UNION_VIEW&LANGUAGE=144&SIMPLE_EXP=Y&ERRMSG=[MIT_ROOT]no-record.html`;
    console.log(SEARCH_TERMS);
    return (
      <>
        <Card
          bodyStyle={{ textAlign: "center" }}
          style={{ marginTop: 16, marginBottom: "30px" }}
          type="inner"
          title={<strong>ADVANCED SEARCH</strong>}
        >
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
              ></Form>
              <FieldSelect />
              <Button type="dashed" style={{ width: 200 }}>
                <Icon type="plus" /> Add field
              </Button>
              <DatePicker
                renderExtraFooter={() => "extra footer"}
                showTime
                id="datePick"
                defaultPickerValue="2012"
                mode="year"
                format="YYYY"
                onPanelChange={(e, mode) => {
                  console.log(e, mode);

                  const ke = new KeyboardEvent("keydown", {
                    bubbles: true,
                    cancelable: true,
                    keyCode: 13
                  });
                  console.log(ke);
                  document.dispatchEvent(ke);
                }}
                onChange={_ => {
                  console.log("henlo");
                }}
              />
            </Col>
          </Row>

          <Col gutter={36}>
            <Col span={8}>
              <Button style={{ width: "75%" }} onClick={this.showModal}>
                Browse
              </Button>
            </Col>
            <Col span={8}>
              <Button
                style={{ width: "75%" }}
                href={`${
                  document.getElementById("session-id").innerText
                }?get&file=[MIT_ROOT]home.html`}
              >
                Simple Search
              </Button>
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

export default AdvancedSearch;
