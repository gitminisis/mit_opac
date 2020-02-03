import React from "react";
import {
  Row,
  Col,
  Layout,
  Icon,
  Menu,
  Button,
  Empty,
  Typography,
  Card,
  PageHeader
} from "antd";
import { extractDetailData } from "../../services/library";
import noImage from "../../assets/images/no-image.png";
class DetailHeader extends React.Component {
  render() {
    const data = this.props.data;
    console.log(data);
    const item = extractDetailData(data);
    console.log(item);
    return (
      <>
        <PageHeader
          style={{}}
          onBack={() => (window.location = data.return_summary.a._href)}
          subTitle={<h4>Back To Summary</h4>}
        />
        <Card
          style={{}}
          className="detailHeader"
          actions={[
            <Icon type="book" className="detailHeaderCardIcon" />,
            <Icon type="link" className="detailHeaderCardIcon" />,
            <Icon type="printer" className="detailHeaderCardIcon" />,
            <Icon type="share-alt" className="detailHeaderCardIcon" />
          ]}
        >
          <Row gutter={16}>
            <Col xs={10} md={8} lg={4}>
              <div className="detailHeaderImage">
                <img src={noImage}></img>
              </div>
            </Col>
            <Col xs={14} md={16} lg={20}>
              <Typography.Title level={3}>{item.title}</Typography.Title>
            </Col>
          </Row>{" "}
        </Card>
      </>
    );
  }
}

export default DetailHeader;
