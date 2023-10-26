import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
// import AuthLayout from "../../components/";
import { Layout, Input, Row, Col, Modal, Upload } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import RequestForm from "../../views/requestLink/requestForm";


// import router from "next/router";

function LinkAccount() {
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Search } = Input;
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);
    const [loading, setLoading] = React.useState(false);



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

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const [previewOpen, setPreviewOpen] = useState(false);
    // const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([

    ]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        // setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <Layout
            className=""
            style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
            <Row justify={"center"} style={{ textAlign: "center" }}>
                <Col xs={23} md={22}>
                    <h2 className="out-heading">Link Account</h2>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={23} md={22}>
                    <div className="main-card">
                        <div className='card-upload'>
                            <Upload
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-circle"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                                maxCount={1}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <span className='card-text'>Wise</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
}

export default LinkAccount;
