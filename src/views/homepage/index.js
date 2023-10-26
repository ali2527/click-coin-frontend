import React from "react";
// import AuthLayout from "../../components/";
import { Layout, Input, Row, Col, Button } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import DashboardProfilepic from "../../views/homepage/dashboardProfilepic";
import ProfileCards from "../../views/homepage/profileCards";
import DashboardTable from "../../views/homepage/dashboardTable";

// import router from "next/router";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);

  // useEffect if user is already logged in


  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data = {
      email: values.email,
      password: values.password,
      devideId: "123456789",
    };
    Post(AUTH.signin, data)
      .then((response) => {
        setLoading(false);
        if (response?.data) {
          console.log("response", response.data.token);
          console.log("response", response.data.user);
          dispatch(
            addUser({ user: response.data.user, token: response.data.token })
          );
          navigate("/", { replace: true });
        } else {
          swal("Oops!", response.response.data.message, "error");
        }
      })
      .catch((e) => {
        console.log(":::;", e);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <DashboardProfilepic />

      <Row justify={"center"}>
        <Col xs={23} md={22}>
          <div className="main-card">
            <Button
              type="primary"
              htmlType="submit"
              className="web-btn"
              style={{
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => navigate("/cashout")}
            >
              {loading ? "Loading..." : "Continue"}
            </Button>
            {/* <p>Last cash out done on 24/08/2023 at 11:00</p> */}

            <ProfileCards />
            <DashboardTable />
          </div>
        </Col>
      </Row>

    </Layout>
  );
}

export default Homepage;
