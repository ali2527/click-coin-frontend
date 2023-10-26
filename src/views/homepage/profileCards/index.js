import React, { useState , useEffect } from "react";
import { Col, Row, Image, Avatar, Card } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import Pro1 from "../../../assets/pro1.png";
import { useNavigate } from "react-router";
import Camp from "../../../assets/camp.png";
import Apppic from "../../../assets/app-pic.png";
import { SlArrowRight } from "react-icons/sl";
import { Get } from "../../../config/api/get";
import {USERS, UPLOADS_URL} from "../../../config/constants/api"
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const ProfileCards = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginationConfig, setPaginationConfig] = useState({
        pageNumber: 1,
        limit: 10,
        totalDocs: 0,
        totalPages: 0,
      });


    useEffect(() => {
        getAllCreators();
      }, []);
    
      const getAllCreators = async (pageNumber) => {
        setLoading(true);
        try {
          const response = await Get(USERS.getAllUsers,token, {
            page: pageNumber
              ? pageNumber.toString()
              : paginationConfig.pageNumber.toString(),
            limit: "3",
          });
          setLoading(false);
          console.log("response", response);
          if (response?.status) {
            setCreators(response?.data?.docs);
            setPaginationConfig({
              pageNumber: response?.data?.page,
              limit: response?.data?.limit,
              totalDocs: response?.data?.totalReviews,
              totalPages: response?.data?.totalPages,
            });
          } else {
            console.log("error====>", response);
          }
        } catch (error) {
          console.log(error.message);
          setLoading(false);
        }
      };



    const profilescardsdata = [
        {
            imageSrc: Pro1,
            title: "Eiden",
            subtext: "@username",
            numbers: "0",
        },
        {
            imageSrc: Pro1,
            title: "Sana Ali",
            subtext: "@username",
            numbers: "0",
        },
        {
            imageSrc: Pro1,
            title: "Riz Ahmed",
            subtext: "@username",
            numbers: "0",
        },
    ];
    return (
        <div className="profileCard-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={22}>
                    <div className="">
                        <Row gutter={16}>
                            {creators.map((item, index) => (
                                <Col xs={8} lg={8} key={index}>
                                    <Card
                                        // hoverable
                                        className="profiles-cards"
                                    >
                                        <div className="pro-pic">
                                        <Avatar
                                                            size={100}
                                                                preview={false}
                                                                alt={"Failed to load image"}
                                                                src={!item.image ? "./images1/avatar.png" : UPLOADS_URL + "/" + item.image}
                                                                className=""
                                                            />
                                            
                                        </div>
                                        <h5>{item.firstName + " " + item.lastName}</h5>
                                        <p>@{item.username}</p>
                                        <h3>{item.numbers || 0}</h3>
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
