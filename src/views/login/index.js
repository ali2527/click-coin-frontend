import React, { useEffect } from "react";
import { Layout, Col, Row, Button, Form, Input, Checkbox, Image, Divider } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import Logo from "../../assets/logo-header.png";
import Facebook from "../../assets/facebook.svg";
import Gogle from "../../assets/gogle.png";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import swal from "sweetalert";

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const [loading, setLoading] = React.useState(false);
  const [tokenClient, setTokenClient] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const CLIENT_ID = "500994605618-nk6h74l0lusqqpv2u0ajof31iqu5i71l.apps.googleusercontent.com";
  const SCOPES = "https://www.googleapis.com/auth/adsense https://www.googleapis.com/auth/adsense.readonly"


const createAccess = () => {
  tokenClient.requestAccessToken();
}

const handleCallbackResonse = (response) =>{
  console.log("Encoded JWT ID Token: " + response.credential)
  var userObject = jwtDecode(response.credential)
  console.log(userObject)

}

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:CLIENT_ID,
      callback: handleCallbackResonse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline", size:'large'}
    )

    setTokenClient(google.accounts.oauth2.initTokenClient({
      client_id:CLIENT_ID,
      scope: SCOPES,
      callback:async (tokenResponse) => {
        console.log(tokenResponse);
        

        if(tokenResponse && tokenResponse.access_token){
          onFinish(tokenResponse.access_token)
        }
      }
    }))


  }, [])
  



console.log(email)


  const onFinish =async (values) => {
 google.accounts.oauth2.initTokenClient({
      client_id:CLIENT_ID,
      scope: SCOPES,
      callback:async (tokenResponse) => {
        console.log(tokenResponse);
        

        if(tokenResponse && tokenResponse.access_token){

         let data = {
          email: values.email,
          password: values.password,
        };
        Post(AUTH.signin, data)
          .then((response) => {
            setLoading(false);
            console.log("response", response.data);
            if (response?.data?.status) {
              console.log("responsess", response.data?.data.user);
              dispatch(
                addUser({ user: response.data?.data?.user, token: response.data?.data.token,accessToken:tokenResponse.access_token})
              );
              navigate("/dashboard", { replace: true });
            } else {
              swal("Oops!", response.data.message, "error");
            }
          })
          .catch((e) => {
            console.log(":::;", e);
            setLoading(false);
          });


        }
      }}).requestAccessToken();
      
      
    setLoading(true);
  

 
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
                  <h4 className="auth-card-title">Sign in to your workspace</h4>
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
                    <h4 className="auth-card-title">Sign in to your workspace</h4>
                  </div>
                </Col>
              </Row>
              <Form
               form={form}
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
                <Form.Item
                  label="Username"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input valid Username!",
                      // warningOnly: true,
                    },
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      borderRadius: "12px",
                      background: "white",
                      fontSize: "14px",
                      padding: "18px 20px",
                    }}
                  />
                </Form.Item>
                <Row>
                  <Col xs={12} md={12}>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      style={{ marginBottom: 0 }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col xs={12} md={12}>
                    <Button
                      type="link"
                      className="forget-text"
                      style={{
                        float: "right",
                      }}
                      onClick={() => navigate("/forget-password-1")}
                    >
                      Forgot Password?
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
                    // onClick={createAccess} 
                    // onClick={() => navigate("/dashboard")}
                  >
                    {loading ? "Loading..." : "Continue"}
                  </Button>
                </Form.Item>
              </Form>
              <div>
                <Divider>or</Divider>

                <Button
                  type="primary"
                  htmlType="button"
                  className="social-btn"
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontWeight:"bold",
                    justifyContent: "center",
                    gap: "30px"
                  }}
                  onClick={() => navigate("/signup")}
                >
                  
                  Sign Up for a new account
                </Button>
              </div>

              <div style={{display:'flex', alignItems:'center',flexDirection:"column"}}>
                {/* <Divider>or</Divider> */}

                {/* <div id="signInDiv"></div> */}
{/* 
                <Button
                  type="primary"
                  htmlType="button"
                  className="social-btn"
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px"
                  }}
                >
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={Facebook}
                    className=""
                  />
                  Sign in with Facebook
                </Button> */}
 {/* <GoogleLogin
      className="social-btn"
      onSuccess={handleGoogleLoginSuccess}
      onError={() => {
        console.log('Login Failed');
      }}
    /> */}
                {/* <Button
                  type="primary"
                  htmlType="button"
                  className="social-btn"
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px"
                  }}
                >
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    src={Gogle}
                    className=""
                  />
                  Sign in with Google
                </Button> */}
              </div>
          
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default Login;
