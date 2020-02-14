import React from "react";
import { Row, Col } from "antd";

class DataRow extends React.Component {
  render() {
    return (
      <div>
        {this.props.content ? (
          <Row className="detailRow">
            <Col className="detailRowTitle" span={24}>
              {this.props.title}
            </Col>{" "}
            <Col className="detailRowContent" span={24}>
              {this.props.content}
            </Col>
          </Row>
        ) : null}
      </div>
    );
  }
}

export default DataRow;
