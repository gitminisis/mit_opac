import React from "react";
import { Tabs } from "antd";
import DataRow from "./DataRow";

const { TabPane } = Tabs;
class DetailData extends React.Component {
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab={<strong>ADDITIONAL DETAILS</strong>} key="1">
          <DataRow title="Material Type:" content={data.item_form}></DataRow>
          <DataRow
            title="Physical Extent #:"
            content={`${data.item_phys_extent} ${data.item_phys_extunit}`}
          ></DataRow>
          <DataRow
            title="Virtual Extent #:"
            content={`${data.item_virt_extent} ${data.item_virt_extunit}`}
          ></DataRow>
          <DataRow
            title="Extent Details:"
            content={data.item_physical_desc}
          ></DataRow>

          <DataRow
            title="Related Material:"
            content={data.item_related_mat}
          ></DataRow>
          <DataRow title="Scope Note:" content={data.item_scope}></DataRow>
          <DataRow title="General Notes:" content={data.item_notes}></DataRow>
          <DataRow
            title="General Physical Description Notes:"
            content={data.item_conservation}
          ></DataRow>
          <DataRow
            title="Corporate Taxonomy Term(s):"
            content={data.item_corporate_group}
          ></DataRow>
        </TabPane>
        <TabPane tab={<strong>DIGITAL ASSETS</strong>} key="2">
          Content of Tab Pane 2
        </TabPane>
      
      </Tabs>
    );
  }
}

export default DetailData;
