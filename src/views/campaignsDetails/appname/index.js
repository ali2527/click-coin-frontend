import React, { useState , useEffect } from "react";
import { Col, Row, Image, Button, Input,Avatar } from "antd";
import Camp2 from "../../../assets/camp2.png";
import Apppic from "../../../assets/app-pic.png";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate,useParams } from "react-router";
import { Get } from "../../../config/api/get";
import {CAMPAIGNS, UPLOADS_URL} from "../../../config/constants/api"
import { useSelector, useDispatch } from "react-redux";



const AnalyticsCarts = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);
    const {id} = useParams()
    const [campaign, setCampaign] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        getCampaignDetail();
      }, []);
    
      const getCampaignDetail = async (pageNumber) => {
        setLoading(true);
        try {
          const response = await Get(CAMPAIGNS.getCampaignById + id,token);
          setLoading(false);
          console.log("response", response);
          if (response?.status) {
            setCampaign(response?.data);
          } else {
            console.log("error====>", response);
          }
        } catch (error) {
          console.log(error.message);
          setLoading(false);
        }
      };


    const cardsdata = {
        camp2: Camp2,
        apppic: Apppic,
        camproname: "Sweatcoin - Healthier plane...",
        appdownload: "$2.1 per app download",
        appdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo ut nunc venenatis fringilla. Nullam eget urna vitae ex auctor fermentum. Pellentesque ut eros id justo placerat lacinia. Proin sed erat nec arcu posuere consectetur. Fusce tincidunt tincidunt odio, nec laoreet urna dictum nec. Quisque eget vehicula urna. Nulla facilisi.",
        appinfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo ut nunc venenatis fringilla. Nullam eget urna vitae ex auctor fermentum. Pellentesque ut eros id justo placerat lacinia. Proin sed erat nec arcu posuere consectetur.",
    };
    return (
        <div className="trustpeople-box" style={{paddingBottom:"100px"}}>
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={24}>
                    <div className="" style={{ textAlign: "center" }}>
                        <div className="detail-camp-pro-box">
            

<Avatar
                                                            size={100}
                                                                preview={false}
                                                                alt={"Failed to load image"}
                                                                src={!campaign.avatar ? "/images/avatar.png" : UPLOADS_URL + "/" + campaign.avatar}
                                                                className=""
                                                            />
                            <div>
                                <h5>{cardsdata.camproname}</h5>
                                <p>{cardsdata.appdownload}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={22}>
                    <div className="" style={{ textAlign: "center", margin: "20px 0" }}>
                        <div className="campaigcard-banner">
                        {campaign.image && <Image
                                preview={false}
                                alt={"Failed to load image"}
                                width={"100%"}
                                height={700}
                                style={{objectFit:'cover',borderRadius:"20px"}}
                                src={UPLOADS_URL + "/" + campaign.image}
                                className=""
                            />}
                        </div>
                    </div>
                </Col>
            </Row>

            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={22}>
                    <Input placeholder="clickcoin.com/sweatcoinapp" className="web-input" />
                </Col>
            </Row>

            <Row style={{ width: "100%", justifyContent: "center", margin: "20px 0" }}>
                <Col xs={23} md={22}>
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Col xs={23} md={12}>
                            <Button
                                type="primary"
                                htmlType="button"
                                className="web-btn"
                                style={{
                                    cursor: "pointer",
                                    width: "99%",
                                    margin:"5px 0",
                                }}
                            >
                               Copy Link
                            </Button>
                        </Col>
                        <Col xs={23} md={12} style={{textAlign:"end"}}>
                            <Button
                                type="primary"
                                htmlType="button"
                                className="web-btn"
                                style={{
                                    cursor: "pointer",
                                    width: "99%",
                                    margin:"5px 0",
                                }}
                            >
                                Create Custom Link
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ width: "100%", justifyContent: "center" ,margin: "10px 0" }}>
                <Col xs={23} md={22}>
                    <h5 className="text-24">App Description</h5>
                    <p className="web-p">{campaign.description}</p>
                </Col>
            </Row>
            <Row style={{ width: "100%", justifyContent: "center" ,margin: "10px 0" }}>
                <Col xs={23} md={22}>
                    <h5 className="text-24">More Info</h5>
                    <p className="web-p">{campaign.info}</p>
                </Col>
            </Row>

        </div>
    );
};

export default AnalyticsCarts;
