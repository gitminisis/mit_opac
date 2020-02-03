import React from "react";
import { extractSummaryData } from "../../services/library";
import {
  Card,
  Skeleton,
  Switch,
  Icon,
  Avatar,
  Row,
  Col,
  Typography,
  Empty
} from "antd";
const { Meta } = Card;
const { Title, Text } = Typography;
class ListView extends React.Component {
  render() {
    let records = extractSummaryData(this.props.data.records).item;
    console.log(records);
    return (
      <>
        <Row gutter={12}>
          {records.map((record, index) => {
            return (
              <Col xs={24} xl={8}>
                {" "}
                <Card
                  className="summary-grid-card"
                  key={index}
                  hoverable
                  actions={[<Icon type="setting" key="setting" />]}
                  onClick={_ => (window.location = record.link)}
                >
                  <Row justify="center">
                    <Col span={24}>
                      <div style={{ height: "70px" }}>
                        <h4>{record.title}</h4>
                      </div>
                    </Col>
                    <Col span={24}>
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="No Image"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default ListView;
