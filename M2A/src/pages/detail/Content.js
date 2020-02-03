import React from "react";
import { Tabs } from "antd";
import { Descriptions } from "antd";
import { extractDetailData } from "../../services/library";
const { TabPane } = Tabs;
class Content extends React.Component {
  render() {
    const data = this.props.data;

    const item = extractDetailData(data);

    return (
      <div className="content-tab">
        <Tabs type="card">
          <TabPane tab="Detail Information" key="1">
            <Descriptions
              title=""
              bordered
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              <Descriptions.Item label="Accession Number">
                {item.id}
              </Descriptions.Item>
              <Descriptions.Item label="SISN">{item.sisn}</Descriptions.Item>
              <Descriptions.Item label="Description">
                {item.description}
              </Descriptions.Item>
            </Descriptions>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Content;
