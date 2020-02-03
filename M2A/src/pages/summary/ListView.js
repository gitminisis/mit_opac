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
  Typography
} from "antd";
const { Meta } = Card;
const { Title, Text } = Typography; 

class ListView extends React.Component {
  render() {
    let records = extractSummaryData(this.props.data.records).item;
    console.log(records);
    return (
      <>
        {records.map((record, index) => (
          <Card
            className="summary-list-card"
            key={index}
            hoverable
            actions={[<Icon type="setting" key="setting" />]}
            onClick={_ => (window.location = record.link)}
          >
            <Row gutter={24}>
              <Col xs={24} md={6}>
                <img
                  style={{ width: "100%", maxWidth: "100px" }}
                  src="https://qph.fs.quoracdn.net/main-qimg-78380c2fc9ae27a6052d32edfaa208c1"
                ></img>
              </Col>
              <Col xs={24} md={18}>
                <Title level={3}>{record.title}</Title>
             
              </Col>
            </Row>
          </Card>
        ))}
      </>
    );
  }
}

export default ListView;
