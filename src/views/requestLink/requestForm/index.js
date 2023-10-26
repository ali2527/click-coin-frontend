import { Col, Row, Image, Button, Input } from "antd";
import { useNavigate } from "react-router";
import Requestimg from "../../../assets/requestimg.png";
import { SlArrowRight } from "react-icons/sl";

const RequestForm = () => {
    const navigate = useNavigate();
    return (
        <div className="trustpeople-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={22}>
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Col xs={14} md={14}>
                            <div className="req-pic-box">
                                <Image
                                    preview={false}
                                    alt={"Failed to load image"}
                                    src={Requestimg}
                                    className=""
                                />
                                <h2>Request Link</h2>
                            </div>
                        </Col>
                        <Col xs={10} md={10} style={{ textAlign: "end" }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="web-btn"
                                style={{
                                    cursor: "pointer",
                                    // width: "100%",
                                }}
                            >
                                Send
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default RequestForm;
