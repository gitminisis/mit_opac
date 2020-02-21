import React from "react";
import { Card, Table, Button, Tooltip, Popconfirm } from "antd";
const { Column } = Table;
import Tree from "../Tree";
import { getSearchHistory } from "../../services/searchHistory";
import SearchHistory from "../SearchHistory";
import { logout } from "../../services/logout";

class SideBar extends React.Component {
  render() {
    let sessionId = document.getElementById("session-id").innerText;
    return (
      <>
        <div>
          {" "}
          <Card
            className="sideBarCard"
            title="Browse By Collection"
            style={{ width: "100%" }}
            bordered={false}
          >
            <Tree />
          </Card>
        </div>
        <div>
          {" "}
          <SearchHistory />
        </div>
        <div>
          <Card
            bordered={false}
            className="sideBarCard"
            title="Your Account"
            style={{ width: "100%" }}
            bodyStyle={{ textAlign: "center" }}
          >
            <Tooltip title="Your saved bag">
              {" "}
              <Button
                href={`${
                  document.getElementById("session-id").innerText
                }?get&file=[MIT_ROOT]view-bag.html`}
                size="large"
                className="accountButton"
                style={{ width: "75%" }}
              >
                SAVED BAG
              </Button>
            </Tooltip>
            <Tooltip title="Your saved search">
              {" "}
              <Button
                size="large"
                className="accountButton"
                style={{ width: "75%" }}
              >
                SAVED SEARCH
              </Button>
            </Tooltip>{" "}
            <Popconfirm
              placement="bottom"
              title={
                <span>
                  You might lose your saved bag. <br /> Do you want to logout ?
                </span>
              }
              onConfirm={_ => {
                logout(sessionId).then(res => {
                  window.location = "/";
                });
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                size="large"
                className="accountButton"
                style={{ width: "75%", marginBottom: "30px" }}
              >
                LOGOUT
              </Button>
            </Popconfirm>
          </Card>
        </div>
      </>
    );
  }
}

export default SideBar;
