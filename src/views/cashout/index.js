import React from "react";
// import AuthLayout from "../../components/";
import { Layout, Input, Row, Col, Button, Image, Divider } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import cardicn from "../../assets/cardicn.png";
import PaymentTable from "../../views/paymentLog/paymentTable";

// import router from "next/router";

function PaymentLog() {
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

    const cardsdata = {
        camp2: cardicn,
        cardname: "Wise",
        cardnum: "**** 6754",
    };
    return (
        <Layout
            className=""
            style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <h2 className="out-heading">cashout</h2>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <div className="main-card">
                        <div className="card-flex">
                            <Image
                                preview={false}
                                alt={"Failed to load image"}
                                src={cardsdata.camp2}
                                className=""
                            />
                            <div>
                                <h6>{cardsdata.cardname}</h6>
                                <p>{cardsdata.cardnum}</p>
                            </div>
                        </div>

                        <div className="cashout-detail">
                            <h6>Cashout Amount</h6>
                            <div>
                                <span className="change" onClick={() => navigate("/cashoutAmount")}>Change</span>
                                <span>$20.00</span>
                            </div>
                        </div>
                        <div className="cashout-detail">
                            <h6>Platform Fees</h6>
                            <div>
                                <span>$4.00</span>
                            </div>
                        </div>
                        <Divider></Divider>
                        <div className="cashout-detail">
                            <h5>Platform Fees</h5>
                            <div>
                                <h5>$4.00</h5>
                            </div>
                        </div>

                        <Button
                                type="primary"
                                htmlType="button"
                                className="web-btn"
                                style={{
                                    cursor: "pointer",
                                    width: "100%",
                                    margin:"5px 0",
                                }}
                            >
                               Send Cashout Request
                            </Button>
                    </div>
                </Col>
            </Row>

        </Layout>
    );
}

export default PaymentLog;
