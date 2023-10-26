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

function TopRanking() {
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
                    <h2 className="out-heading">Top Ranking</h2>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <div className="main-card">
                        <ProfileCards />
                        <DashboardTable />
                    </div>
                </Col>
            </Row>

        </Layout>
    );
}

export default TopRanking;
