import React from "react";
import { Descriptions } from "antd";
class Data extends React.Component {
  getBoxGroup = item_box_group => {
    let box_group = [];
    let box_group_length = item_box_group.length;
    for (let i = 0; i < box_group_length / 2; i++) {
      let item = {
        item_box_no: item_box_group[i].item_box_no,
        item_container: item_box_group[i + box_group_length / 2].item_container
      };
      box_group.push(item);
    }
    return box_group;
  };

  render() {
    let item = this.props.data;

    return (
      <>
        <Descriptions
          bordered={this.props.bordered}
          column={1}
          className="summaryRecord"
        >
          <Descriptions.Item label="LEVEL">
            {item.item_level_desc.toUpperCase()}
          </Descriptions.Item>
          <Descriptions.Item label="Title">
            <a href={item.item_link}>
              {" "}
              <strong>{item.item_title}</strong>
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Reference Code">
            {item.item_id}
          </Descriptions.Item>

          {item.item_restrictions ? (
            <Descriptions.Item label="Restrictions">
              <strong> {item.item_restrictions}</strong>
            </Descriptions.Item>
          ) : null}

          {item.item_date ? (
            <Descriptions.Item label="Date">{item.item_date}</Descriptions.Item>
          ) : null}

          {/* {item.item_box_group ? (
            <Descriptions.Item label="Location/Box">
              {this.getBoxGroup(item.item_box_group).map(box => {
                console.log(this.getBoxGroup(item.item_box_group));
                if (!box) {
                  return null;
                }
                return (
                  <Descriptions column={2} className="boxDescription">
                    <Descriptions.Item
                      label="Location:"
                      className="boxLocationDescription"
                    >
                      {box.item_container ? box.item_container : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="Box:">
                      {" "}
                      {box.item_box_no ? box.item_box_no : null}
                    </Descriptions.Item>
                  </Descriptions>
                );
              })}
            </Descriptions.Item>
          ) : null} */}
        </Descriptions>
      </>
    );
  }
}

export default Data;
