import React from "react";
// import AuthLayout from "../../components/";
import { Layout, Input, Row, Col, Button, Divider } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import { GrUserSettings } from "react-icons/gr";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import AnalyticsCarts from "../../views/analytics/analyticsCarts";
import AnalyticsTable from "../../views/analytics/analyticsTable";

// import router from "next/router";

function Analytics() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Search } = Input;
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);
    const [loading, setLoading] = React.useState(false);

    // useEffect if user is already logged in
    React.useEffect(() => {
        if (user && token) {
            navigate("/", { replace: true });
        }
    }, [user, token]);

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
            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <h2 className="out-heading">Settings</h2>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <div className="main-card">
                        <div>
                            <div className="setting-box" onClick={() => navigate("/profileSettings")}>
                                <h5 className="text-18"><GrUserSettings className="gray-icn" /> Profile Settings</h5>
                                <RiArrowRightSLine className="setting-arrow" />
                            </div>
                            <Divider></Divider>
                            <div className="setting-box" onClick={() => navigate("/linkAccount")}>
                                <h5 className="text-18"><BsFillCreditCardFill className="gray-icn" /> Linked Accounts</h5>
                                <RiArrowRightSLine className="setting-arrow" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Layout>
    );
}

export default Analytics;
