import React, { useState , useEffect } from "react";
import { Col, Row, Image, Button, Card,Avatar } from "antd";
import { useNavigate } from "react-router";
import Camp from "../../../assets/camp.png";
import Apppic from "../../../assets/app-pic.png";
import { SlArrowRight } from "react-icons/sl";
import { Get } from "../../../config/api/get";
import {CAMPAIGNS, UPLOADS_URL} from "../../../config/constants/api"
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from "react-paginate";


const AnalyticsCarts = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginationConfig, setPaginationConfig] = useState({
        pageNumber: 1,
        limit: 10,
        totalDocs: 0,
        totalPages: 0,
      });

    useEffect(() => {
        getAllCampaigns();
      }, []);
    
      const getAllCampaigns = async (pageNumber) => {
        setLoading(true);
        try {
          const response = await Get(CAMPAIGNS.getAllCampaigns,token, {
            page: pageNumber
              ? pageNumber.toString()
              : paginationConfig.pageNumber.toString(),
            limit: "10",
          });
          setLoading(false);
          console.log("response", response);
          if (response?.status) {
            setCampaigns(response?.data?.docs);
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


      const handlePageChange = (e) => {
        setPaginationConfig({
          ...paginationConfig,
          pageNumber: Number(e.selected) + 1,
        });
    
        getAllCampaigns(Number(e.selected) + 1);
      };

    return (
        <div className="trustpeople-box">
            <Row style={{ width: "100%", justifyContent: "center" }}>
                <Col xs={23} md={24}>
                    <div className="">
                        <Row justify={"center"} style={{ alignItems: "center" }}>
                            <Col xs={24} md={24}>
                                <Row gutter={16}>
                                    {campaigns.map((item, index) => (
                                        <Col xs={24} lg={24} key={index}>
                                            <Card
                                                // hoverable
                                                className="campaigcard"
                                            >
                                             {item.image && <div className="campaigcard-banner">
                                                <Image
                                                    preview={false}
                                                    alt={"Failed to load image"}
                                                    src={UPLOADS_URL + "/" + item.image}
                                                    width={"100%"}
                                                    height={500}
                                                    style={{objectFit:'cover',borderRadius:"10px"}}
                                                    className=""
                                                />
                                                </div>}
                                                <Row style={{ margin: "22px 0", alignItems:"center" }}>
                                                    <Col xs={18} lg={16}>
                                                        <div className="camp-pro-box">
                                                            <Avatar
                                                            size={100}
                                                                preview={false}
                                                                alt={"Failed to load image"}
                                                                src={!item.avatar ? "/images/avatar.png" : UPLOADS_URL + "/" + item.avatar}
                                                                className=""
                                                            />
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                <p>${item.price} pre app download</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6} lg={8} style={{ textAlign: "end" }}>
                                                        {/* <SlArrowRight className="rightarrow" /> */}
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
                                                    onClick={() => navigate("/campaignsDetails/" + item._id)}
                                                >
                                                    Promote
                                                </Button>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                        {campaigns.length > 0 &&   <ReactPaginate
              breakLabel="..."
              nextLabel={<FaArrowRight style={{ color: "grey" }} />}
              pageRangeDisplayed={window.innerWidth > 500 ? 4 : 1}
              marginPagesDisplayed={window.innerWidth > 500 ? 4 : 1} //handle Pa
              onPageChange={handlePageChange}
              pageCount={paginationConfig?.totalPages}
              forcePage={paginationConfig?.pageNumber - 1}
              previousLabel={<FaArrowLeft style={{ color: "grey" }} />}
              renderOnZeroPageCount={null}
              pageClassName="page-item" //m
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="paginationContainer"
              activeClassName="active"
            />}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AnalyticsCarts;
