import { Col, Row, Image, Button, Card } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import Pro1 from "../../../assets/pro1.png";
import Vectr1 from "../../../assets/vectr1.png";

const ProfileCards = () => {
    const profilescardsdata = [
        {
            imageSrc: Pro1,
            title: "Eiden",
            subtext: "@username",
            numbers: "2430",
        },
        {
            imageSrc: Pro1,
            title: "Sana Ali",
            subtext: "@username",
            numbers: "2430",
        },
        {
            imageSrc: Pro1,
            title: "Riz Ahmed",
            subtext: "@username",
            numbers: "2430",
        },
    ];
    return (
        <div className="profileCard-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={22}>
                    <div className="">
                        <Row gutter={16}>
                            {profilescardsdata.map((item, index) => (
                                <Col xs={8} lg={8} key={index}>
                                    <Card
                                        // hoverable
                                        className="profiles-cards"
                                    >
                                        <div className="pro-pic">
                                            <Image
                                                preview={false}
                                                alt={"Failed to load image"}
                                                src={item.imageSrc}
                                                className=""
                                            />
                                        </div>
                                        <h5>{item.title}</h5>
                                        <p>{item.subtext}</p>
                                        <h3>{item.numbers}</h3>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProfileCards;
