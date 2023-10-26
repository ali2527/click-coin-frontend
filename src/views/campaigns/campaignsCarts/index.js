import { Col, Row, Image, Button, Card } from "antd";
import { useNavigate } from "react-router";
import Camp from "../../../assets/camp.png";
import Apppic from "../../../assets/app-pic.png";
import { SlArrowRight } from "react-icons/sl";

const AnalyticsCarts = () => {
    const navigate = useNavigate();
    const cardsdata = [
        {
            imageSrc: Camp,
            apppic: Apppic,
            camproname: "Sweatcoin",
            appdownload: "$2.1 per app download",
        },
        {
            imageSrc: Camp,
            apppic: Apppic,
            camproname: "Sweatcoin",
            appdownload: "$2.1 per app download",
        },
    ];
    return (
        <div className="trustpeople-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={24}>
                    <div className="">
                        <Row justify={"center"} style={{ alignItems: "center" }}>
                            <Col xs={24} md={24}>
                                <Row gutter={16}>
                                    {cardsdata.map((item, index) => (
                                        <Col xs={24} lg={24} key={index}>
                                            <Card
                                                // hoverable
                                                className="campaigcard"
                                            >
                                             <div className="campaigcard-banner">
                                                <Image
                                                    preview={false}
                                                    alt={"Failed to load image"}
                                                    src={item.imageSrc}
                                                    className=""
                                                />
                                                </div>
                                                <Row style={{ margin: "22px 0", alignItems:"center" }}>
                                                    <Col xs={18} lg={16}>
                                                        <div className="camp-pro-box">
                                                            <Image
                                                                preview={false}
                                                                alt={"Failed to load image"}
                                                                src={item.apppic}
                                                                className=""
                                                            />
                                                            <div>
                                                                <h5>{item.camproname}</h5>
                                                                <p>{item.appdownload}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6} lg={8} style={{ textAlign: "end" }}>
                                                        <SlArrowRight className="rightarrow" />
                                                    </Col>
                                                </Row>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="web-btn"
                                                    style={{
                                                        cursor: "pointer",
                                                        width: "100%",
                                                    }}
                                                    onClick={() => navigate("/campaignsDetails")}
                                                >
                                                    Promote
                                                </Button>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AnalyticsCarts;
