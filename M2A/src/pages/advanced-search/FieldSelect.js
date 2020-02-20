import React from "react";
import { Select, Input } from "antd";

const { Option } = Select;
import { SEARCH_TERMS } from "../../services/advanceSearch";
class FieldSelect extends React.Component {
  onChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <>
        {" "}
        <Select
          showSearch
          style={{ width: 250 }}
          placeholder="Select a field"
          optionFilterProp="children"
          onChange={this.onChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {SEARCH_TERMS.terms.map(item => (
            <Option value={item.term}>{item.title}</Option>
          ))}
        </Select>
        <Input placeholder="Search Term" allowClear style={{ width: 400 }} />
        <Select
          disabled
          showSearch
          defaultValue="and"
          style={{ width: 150 }}
          placeholder="Select an operator"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="and">and</Option>
          <Option value="or">or</Option>
          <Option value="not">not</Option>
        </Select>
      </>
    );
  }
}
export default FieldSelect;
