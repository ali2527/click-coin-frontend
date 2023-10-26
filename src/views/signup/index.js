import React from "react";
import {
  Layout,
  Col,
  Row,
  Button,
  Form,
  Input, Image
} from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import Logo from "../../assets/logo-header.png";
import swal from "sweetalert";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);


   const onFinish = (values) => {

    setLoading(true);

 
    Post(AUTH.signup, values)
      .then((response) => {
        setLoading(false);
        console.log(response)
        if (response?.data?.status) {
          navigate("/", { state: {user:response.data} })
          swal("Success", response.data.message, "success");
        } else {
          console.log("responsess", response?.response?.data?.message);
          
          swal("Oops!", response?.response?.data?.message, "error");
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
      <div className="blur-background">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col xs={24} lg={18}>
            <Row>
              <Col xs={0} lg={24}>
                <div className="login-logo-box">
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={Logo}
                    className="forimg-border"
                  />
                  <h4 className="auth-card-title">Sign up for a new Account</h4>
                </div>
              </Col>
            </Row>
            <div className="login-card">
              <Row>
                <Col xs={24} lg={0}>
                  <div className="login-logo-box">
                    <Image
                      preview={false}
                      alt={"Failed to load image"}
                      src={Logo}
                      className="forimg-border"
                    />
                    <h4 className="auth-card-title">
                      Sign up for a new Account
                    </h4>
                  </div>
                </Col>
              </Row>
              <Form
                layout="vertical"
                name="basic"
                labelCol={{
                  span: 0,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row gutter={20}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your FirstName!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Enter FirstName"
                        style={{
                          borderRadius: "12px",
                          background: "white",
                          fontSize: "14px",
                          padding: "18px 20px",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your LastName!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Enter LastName"
                        style={{
                          borderRadius: "12px",
                          background: "white",
                          fontSize: "14px",
                          padding: "18px 20px",
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter Username"
                    style={{
                      borderRadius: "12px",
                      background: "white",
                      fontSize: "14px",
                      padding: "18px 20px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input valid Email!",
                      // warningOnly: true,
                    },
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter Email"
                    style={{
                      borderRadius: "12px",
                      background: "white",
                      fontSize: "14px",
                      padding: "18px 20px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      type: "string",
                      min: 8,
                      message: "password must be atleast 8 characters!",
                    },
                  ]}
                  style={{ marginBottom: "0" }}
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter Password"
                    style={{
                      borderRadius: "12px",
                      background: "white",
                      fontSize: "14px",
                      padding: "18px 20px",
                    }}
                  />
                </Form.Item>
                <Row>
                  <Col xs={12} md={12}></Col>
                  <Col xs={12} md={12}>
                    <Button
                      type="link"
                      className="forget-text"
                      style={{
                        float: "right",
                      }}
                      onClick={() => navigate("/")}
                    >
                      Already have an account. SignIn?
                    </Button>
                  </Col>
                </Row>
                <br />
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="web-btn"
                    style={{
                      cursor: "pointer",
                      width: "100%",
                    }}
                 
                  >
                    {loading ? "Loading..." : "Signup"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default Login;
