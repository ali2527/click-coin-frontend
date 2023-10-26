import React from "react";
// import AuthLayout from "../../components/";
import { Layout, Input, Row, Col, Button, Collapse } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import RequestForm from "../../views/requestLink/requestForm";


// import router from "next/router";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
    {
        key: '1',
        label: 'Question 01',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'Question 02',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Question 03',
        children: <p>{text}</p>,
    },
];
function CampaignsDetails() {
    const { TextArea } = Input;
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



    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Layout
            className=""
            style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >

            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <h4 className="faq-heading">Hey Braydon!</h4>
                    <p className="faq-subheading">How Can we Help you today?</p>
                    <Button
                        type="primary"
                        htmlType="button"
                        className="web-btn"
                        style={{
                            cursor: "pointer",
                            width: "100%",
                            margin: "5px 0",
                            backgroundColor: "#FBA924"
                        }}
                    >
                        Send us a message
                    </Button>
                    <div className="faqs-box">
                        <h4 className="faq-heading">FAQs</h4>
                        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </div>
                </Col>
            </Row>
        </Layout>
    );
}

export default CampaignsDetails;
