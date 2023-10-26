import { useState } from "react";
import { Image } from "antd";
import { MdMenu } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Menu,
  Button,
  Badge,
  Modal,
  Drawer,
  Popover,
  Dropdown,
  Avatar,
  Typography,
  Input,
  Alert,
  message,
} from "antd";
import { FaBars, FaEllipsisV, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { removeUser } from "../../redux/slice/authSlice";
import { IoIosChatbubbles } from "react-icons/io";
import { UPLOADS_URL, AUTH } from "../../config/constants/api";
import { GoBellFill } from "react-icons/go";
import { useNavigate } from "react-router";
import { BiSearch } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiFillApple } from "react-icons/ai";
import Logo from "../../assets/logo-header.png";
// import avatar from "../../assets/avatar.png";

// import Link from 'next/link'

const { Header } = Layout;

const ClientHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);

  const notificationsCount = 10;
  const latestNotifications = [];
  const [logoutModal, setLogoutModal] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <div
          className="headerDropdown"
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            padding: "2px 8px",
          }}
          onClick={() => navigate("/myProfile")}
        >
          My Profile
          {/* <FaUser style={{ fontSize: "14px" }} /> &nbsp; My Profile */}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="headerDropdown"
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            padding: "2px 8px",
          }}
          onClick={() => navigate("/myProfile")}
        >
          Block Service provider
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            padding: "2px 8px",
          }}
          onClick={() => setLogoutModal(true)}
        >
          Logout
        </div>
      ),
    },
  ];

  const content = (
    <div style={{ width: "350px" }}>
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Notifications</h3>
        <Alert
          message={`${notificationsCount} New`}
          type="success"
          style={{ fontSize: "12px", padding: "2px 10px", color: "green" }}
        />
      </div>
      <hr
        style={{
          borderLeft: "none",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "1px solid rgb(0 0 0 / 15%)",
        }}
      />
      <div style={{ height: "250px", overflow: "auto" }}>
        {latestNotifications &&
          latestNotifications.length > 0 &&
          latestNotifications.map((item) => {
            return (
              <div
                style={{
                  padding: 10,
                  minHeight: "100px",
                  borderBottom: "1px solid #dadada",
                  marginBottom: "5px",
                }}
              >
                <Row
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Col xs={4}>
                    <div
                      style={{
                        // padding: "10px 10px 10px 10px",

                        display: "flex",
                        width: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "40px",
                        backgroundColor: "#385790",
                        borderRadius: "5px",
                      }}
                    >
                      <GoBellFill
                        style={{ fontSize: "20px", color: "white" }}
                      />
                    </div>
                  </Col>
                  <Col xs={18}>
                    <Typography.Title
                      className="fontFamily1"
                      style={{ fontSize: "14px", color: "black", margin: 0 }}
                    >
                      {item.title}
                    </Typography.Title>

                    <Typography.Text
                      className="fontFamily1"
                      style={{ fontSize: "12px", color: "black", margin: 0 }}
                    >
                      {item?.content?.slice(0, 100)}{" "}
                      {item.content.length > 100 && "..."}
                    </Typography.Text>
                  </Col>
                </Row>
              </div>
            );
          })}
      </div>

      <hr
        style={{
          borderLeft: "none",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "1px solid rgb(0 0 0 / 15%)",
        }}
      />

      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button onClick={() => navigate("/notifications")} type="link">
          View All
        </Button>
      </div>
    </div>
  );

  const logout = () => {
    setLogoutModal(false);

    dispatch(removeUser());
    navigate("/signin");
  };

  return (
    <Header
      style={{
        height: "auto",
        // position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 20,
        padding: "0px",
        background: "#fff",
        scrollBehavior: "smooth",
      }}
    >
      <Row
        style={{
          padding: "5px 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={22} lg={22}>
          <Row className="header-row">
            <Col xs={12} lg={12} xl={12} style={{ textAlign: "start" }}>
              <MdMenu
                style={{ fontSize: 26, color: "#000" }}
                onClick={() => setVisible(true)}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Drawer
        className="drawer"
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        // style={{ backgroundColor: "#264067" }}
        key={"drawer"}
      >
        <ImCross
          onClick={() => setVisible(false)}
          style={{
            fontSize: "18px",
            color: "#000",
            display: "block",
            cursor: "pointer",
            marginBottom: "14px",
          }}
        />
        <br />
        <br />
        <br />

        <Menu
          style={{
            fontSize: 18,
            fontWeight: 500,
            // backgroundColor: "#264067",
            color: "#000",
          }}
          mode="inline"
          className="header-menu-mobile "
        >
          <Menu.Item key="home" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/dashboard"); }}>
            Home
          </Menu.Item>
          <Menu.Item key="earnings" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/dashboard"); }}>
            Earnings
          </Menu.Item>
          <Menu.Item key="topRanking" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/TopRanking"); }}>
            Top Ranks
          </Menu.Item>
          <Menu.Item key="analytics" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/analytics"); }}>
            App Analytics
          </Menu.Item>
          <Menu.Item key="campaigns" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/campaigns"); }}>
            Campaigns
          </Menu.Item>
          <Menu.Item key="payments" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/paymentLog"); }}>
            Payments
          </Menu.Item>
          <Menu.Item key="faqs" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/faq"); }}>
            FAQs
          </Menu.Item>
        </Menu>
        <br />
        <br />
        <Row gutter={20}>
          <Col span={20}>
            <Button
              type="primary"
              className="web-btn"
              style={{
                padding: "0px 30px",
                cursor: "pointer",
              }}
              onClick={() => { setVisible(false); navigate("/requestLink"); }}>
              Request Link
            </Button>
          </Col>
        </Row>

        <Menu
          style={{
            fontSize: 18,
            fontWeight: 500,
            // backgroundColor: "#264067",
            color: "#000",
          }}
          mode="inline"
          className="header-menu-mobile "
        >
          <Menu.Item key="settings" className="hover fontFamily1" onClick={() => { setVisible(false); navigate("/settings"); }}>
            Settings
          </Menu.Item>
          <Menu.Item key="about" className="hover fontFamily1">
            Logout
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default ClientHeader;
