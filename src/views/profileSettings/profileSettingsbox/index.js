import { useState } from "react";
import { Col, Row, Image, Button, Input, Form, Avatar, Upload } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import { UPLOAD_URL } from "../../../config/constants/api";
import { TbCameraPlus } from "react-icons/tb";
import profileimg from "../../../assets/profileimg.png";

const ProfileSettingsbox = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [user, setUser] = useState({
        id: 1,
        fname: "Easin",
        lname: "Arafat",
        mnumber: "+ 1 23456 789",
        email: "dummyemail@example",
        gender: "Male",
        date: "10-05-1990",
    });
    const [imageNew, setImageNew] = useState();
    return (
        <div className="trustpeople-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={6}>
                    <Form.Item name="image" className="profilepic">
                        <Upload
                            name="image"
                            showUploadList={false}
                            style={{ position: "relative" }}
                            beforeUpload={(file) => {
                                setImageNew(URL.createObjectURL(file));
                                return false;
                            }}
                        >
                            {" "}
                            <div className="camra-icn"
                                style={{
                                    padding: "8px",
                                    position: "absolute",
                                    right: 30,
                                    zIndex: 2,
                                    bottom: 10,
                                    backgroundColor: "#F00",
                                    display: "flex",
                                    maxWidth: "fit-content",
                                    color: "white",
                                    borderRadius: "20px",
                                }}
                            >
                                <TbCameraPlus />
                            </div>{" "}
                            <Avatar
                                // size={120}
                                src={
                                    imageNew
                                        ? imageNew
                                        : !user?.image
                                            ? profileimg
                                            : UPLOAD_URL + "/" + user?.image
                                }
                                className="avtr"
                            />
                        </Upload>
                    </Form.Item>
                </Col>
                <Col xs={23} md={18}>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="sana_anjum" className="web-input" />
                        </Form.Item>

                        <Row>
                            <Col xs={12} md={12}>
                                <Form.Item
                                    label="First Name"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Sana" className="web-input" style={{ width: "98%" }} />
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={12}>
                                <Form.Item
                                    label="Last Name"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Anjum" className="web-input" style={{ width: "98%" }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            label="Email"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="sanaanjum@surkush.com" className="web-input" />
                        </Form.Item>

                        <Form.Item
                            label="Contact Number"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="+971-7788777777" className="web-input" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="+971-7788777777" className="web-input" />
                        </Form.Item>


                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="web-btn"
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ProfileSettingsbox;
