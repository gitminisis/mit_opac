import React from "react";
import { Select, Input, Icon, Button, Row, Col, Form } from "antd";
const InputGroup = Input.Group;
const { Option } = Select;
import { SEARCH_TERMS } from "../../services/advanceSearch";
import { isLogged } from "../../services/authentication";

class FieldSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchExp: [
        {
          field: "REFD",
          keyword: "",
          boolean: "and"
        },
        {
          field: "REFD",
          keyword: "",
          boolean: "and"
        },
        {
          field: "REFD",
          keyword: ""
        }
      ]
    };
  }
  onChange = value => {
    console.log(`selected ${value}`);
  };
  updateField = (key, value, index) => {
    let searchExp = this.state.searchExp;
    searchExp[index][key] = value;
    console.log(searchExp);
    this.setState({
      searchExp: searchExp
    });
  };
  removeField = index => {
    console.log(index);
    let searchExp = this.state.searchExp;
    // searchExp.splice(index, 1);
    console.log(searchExp[index]);
    searchExp.splice(index, 1);
    console.log(searchExp, this.state.searchExp);
    this.setState({
      searchExp: searchExp
    });
  };
  addField = _ => {
    let searchExp = this.state.searchExp;
    searchExp[searchExp.length - 1].boolean = "and";
    searchExp.push({
      field: "REFD",
      keyword: "",
      remove: true
    });

    this.setState({
      searchExp: searchExp
    });
    console.log(this.state.searchExp);
  };

  resetFields = _ => {
    this.setState({
      searchExp: [
        {
          field: "REFD",
          keyword: "",
          boolean: "and"
        },
        {
          field: "REFD",
          keyword: "",
          boolean: "and"
        },
        {
          field: "REFD",
          keyword: ""
        }
      ]
    });
  };

  submitSearch = _ => {
    let data = this.state.searchExp.filter(e => e.keyword !== "");
    let len = data.length;
    data = data
      .map(
        (exp, index) =>
          `${exp.field} ${exp.keyword} ${
            exp.boolean && index !== len - 1 ? exp.boolean : ""
          }`
      )
      .join(" ");
    console.log(data);
    document.getElementById("advancedSearchInput").value = data;
    document.getElementById("advancedSearchForm").submit();
  };
  render() {
    let sessionId = document.getElementById("session-id").innerText;
    let isLoggedOn = isLogged();
    return (
      <>
        {" "}
        <Form
          hidden
          method="POST"
          id="advancedSearchForm"
          action={`${sessionId}?UNIONSEARCH&APPLICATION=UNION_VIEW&LANGUAGE=144&SIMPLE_EXP=Y&ERRMSG=[MIT_ROOT]no-record.html`}
        >
          <Input name="KEYWORDS" hidden id="advancedSearchInput" />
        </Form>
        {this.state.searchExp.map((exp, index) => (
          <InputGroup
            compact
            style={{ maxWidth: "800px", margin: "20px auto" }}
          >
            <Select
              disabled={!isLoggedOn}
              value={exp.field ? exp.field : exp.field}
              showSearch
              style={{ width: "25%" }}
              placeholder="Select a field"
              optionFilterProp="children"
              onChange={value => {
                this.updateField("field", value, index);
              }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {SEARCH_TERMS.terms.map(item => (
                <Option value={item.term}>{item.title}</Option>
              ))}
            </Select>
            <Input
              disabled={!isLoggedOn}
              placeholder="Search Term"
              allowClear
              value={exp.keyword}
              style={{ width: "50%" }}
              onChange={e => {
                this.updateField("keyword", e.target.value, index);
              }}
            />
            <Select
              disabled={!isLoggedOn || !exp.boolean}
              value={exp.boolean ? exp.boolean : exp.boolean}
              style={{ width: "15%" }}
              placeholder="Select an operator"
              onChange={value => {
                this.updateField("boolean", value, index);
              }}
            >
              <Option value="and">and</Option>
              <Option value="or">or</Option>
              <Option value="not">not</Option>
            </Select>
            {index >= 3 ? (
              <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                onClick={_ => {
                  this.removeField(index);
                }}
              />
            ) : (
              <span
                className="dynamic-delete-button"
                style={{ width: "24px" }}
              ></span>
            )}
          </InputGroup>
        ))}
        <Button
          disabled={!isLoggedOn}
          type="dashed"
          style={{ width: 200, marginTop: "40px" }}
          onClick={_ => this.addField()}
        >
          <Icon type="plus" /> Add field
        </Button>
        <Row>
          <Col span={8} offset={4}>
            <Button
              style={{ width: 200 }}
              className="advancedSearchBtn"
              onClick={_ => this.submitSearch()}
            >
              SEARCH
            </Button>
          </Col>
          <Col span={8}>
            {" "}
            <Button
              style={{ width: 200 }}
              className="advancedSearchBtn"
              onClick={_ => this.resetFields()}
            >
              CLEAR
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}
export default FieldSelect;
