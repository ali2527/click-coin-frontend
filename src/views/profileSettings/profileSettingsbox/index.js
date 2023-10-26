import { useState } from "react";
import { Col, Row, Image, Button, Input, Form, Avatar, Upload } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import { UPLOADS_URL,USER } from "../../../config/constants/api";
import { TbCameraPlus } from "react-icons/tb";
import profileimg from "../../../assets/profileimg.png";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../../config/api/post";
import {CONTENT_TYPE} from "../../../config/constants/index"
import { addUser } from "../../../redux/slice/authSlice";
import swal from "sweetalert"

const ProfileSettingsbox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Search } = Input;
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);
    const [imageNew, setImageNew] = useState();


    const onFinish = (values) => {
   
        const formObject = new FormData();

        console.log(values)
    
        if(imageNew){
          formObject.append("image",values.image.fileList[0].originFileObj);
        }
    
        for (const key in values) {
          if (key !== "image") {
            const item = values[key];
            formObject.append(key, item);
          }
        }
    
        for (const pair of formObject.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
       


    
        Post(USER.updateProfile,formObject,token,null,CONTENT_TYPE.FORM_DATA)
          .then((response) => {
           
            if (response?.data?.status) {
              console.log(response?.data)
              dispatch(
                addUser({ user: response.data.data, token: token })
              );
    
              swal("Success!", "Profile Updated Successfully", "success");

              setImageNew()
            } else {
              swal("Oops!", response.data.message, "error");
            }
          })
          .catch((e) => {
    
           console.log(e)
          });
      };
    

      

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="trustpeople-box">
            <Form
                        name="basic"
                        layout="vertical"
                        initialValues={user}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
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
                              
                                src={
                                    imageNew
                                        ? imageNew
                                        : (!user?.image
                                            ?  "./images1/avatar.png"
                                            : UPLOADS_URL + "/"  + user?.image)
                                }
                                className="avtr"
                            />
                        </Upload>
                    </Form.Item>
                </Col>
                <Col xs={23} md={18}>
                    
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
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your first name!',
                                        },
                                    ]}
                                >
                                    <Input  className="web-input" style={{ width: "98%" }} />
                                </Form.Item>
                            </Col>
                            <Col xs={12} md={12}>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your last name!',
                                        },
                                    ]}
                                >
                                    <Input  className="web-input" style={{ width: "98%" }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input disabled  className="web-input" />
                        </Form.Item>

                        <Form.Item
                            label="Contact Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input placeholder="Phone Number" className="web-input" />
                        </Form.Item>

                        <Form.Item
                            label="Tag"
                            name="tag"
                        >
                            <Input placeholder="creator, editor etc" className="web-input" />
                        </Form.Item>

                        
                        <Form.Item
                            label="About"
                            name="bio"
                        >
                            <Input placeholder="About you" className="web-input" />
                        </Form.Item>

                        <Form.Item
                            label="More Info"
                            name="info"
                        >
                            <Input placeholder="More about you" className="web-input" />
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
                                Update
                            </Button>
                        </Form.Item>
                    
                </Col>
            </Row>
            </Form>
        </div>
    );
};

export default ProfileSettingsbox;
