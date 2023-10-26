import { Col, Row, Image, Button, Card } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import Elip26 from "../../../assets/elip26.png";
import Vectr1 from "../../../assets/vectr1.png";

const AnalyticsCarts = () => {
    const cardsdata = [
        {
            imageSrc: Vectr1,
            title: "Total Earnings",
            dolarnumbers: "$2500",
        },
        {
            imageSrc: Vectr1,
            title: "App Install Earnings",
            dolarnumbers: "150",
        },
        {
            imageSrc: Vectr1,
            title: "Google Ads. Revenue",
            dolarnumbers: "$5k",
        },
        {
            imageSrc: Vectr1,
            title: "Challenges Earnings",
            dolarnumbers: "450",
        },
    ];

    const prodata = {
        proimg: Elip26,
        proname: "Farrukh Khaan",
        proemal: "@farrukh.khan",
      };
    return (
        <div className="trustpeople-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={24}>
                    <div className="">
                        <Row justify={"center"} style={{ alignItems: "center" }}>
                            <Col xs={24} md={24}>
                                <Row gutter={16}>
                                    {cardsdata.map((item, index) => (
                                        <Col xs={12} lg={6} key={index}>
                                            <Card
                                                // hoverable
                                                className="dashboard-mini-card"
                                            >
                                                <Image
                                                    preview={false}
                                                    alt={"Failed to load image"}
                                                    src={item.imageSrc}
                                                    className="dashbord-icn-pics"
                                                />
                                                <p>{item.title}</p>
                                                <h4>{item.dolarnumbers}</h4>
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
