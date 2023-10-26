import { Col, Row, Image, Button, Card, Avatar } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import Elip26 from "../../../assets/elip26.png";
import Vectr1 from "../../../assets/vectr1.png";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { UPLOADS_URL } from "../../../config/constants/api";


const Trustedpeople = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);


    const cardsdata = [
        {
            imageSrc: Vectr1,
            title: "Total Earnings",
            dolarnumbers: "$0",
        },
        {
            imageSrc: Vectr1,
            title: "Weekly Earnings",
            dolarnumbers: "0",
        },
        {
            imageSrc: Vectr1,
            title: "Balance",
            dolarnumbers: "0",
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
                <Col xs={23} md={22}>
                    <div className="">
                        <Row justify={"center"} style={{ alignItems: "center" }}>
                            <Col xs={24} md={12}>
                                <div className="dashboard-profile">
                                    <Avatar src={user.image ? UPLOADS_URL + "/" +  user.image : "./images1/avatar.png"} size={80} />
                                    <div>
                                        <h3>{user.firstName + " " +  user.lastName }</h3>
                                        <span>@{user.username}</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={12}>
                                <Row gutter={16}>
                                    {cardsdata.map((item, index) => (
                                        <Col xs={8} lg={8} key={index}>
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

export default Trustedpeople;
