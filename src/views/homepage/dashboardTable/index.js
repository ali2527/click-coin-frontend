import { Col, Row, Image, Space, Table, Tag } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router";
// import Pro1 from "../../../assets/pro1.png";


const columns = [
    {
        title: 'Creators',
        dataIndex: 'creators',
        key: 'creators',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Ranks',
        dataIndex: 'ranks',
        key: 'ranks',
    },
    {
        title: 'Earnings',
        dataIndex: 'earnings',
        key: 'earnings',
    },
];
const data = [
    // {
    //     key: '1',
    //     creators: 'John Brown',
    //     ranks: "4th",
    //     earnings: '$76',
    // },
    // {
    //     key: '2',
    //     creators: 'Jim Green',
    //     ranks: "4th",
    //     earnings: '$76',
    // },
    // {
    //     key: '3',
    //     creators: 'Joe Black',
    //     ranks: "4th",
    //     earnings: '$76',
    // },
];

const ProfileCards = () => {
    const navigate = useNavigate();
    return (
        <div className="profileCard-box">
            <Row style={{ width: "100%", justifyContent: "center", }}>
                <Col xs={23} md={24}>
                    <div className="">
                        <Row className="topcreator-txt">
                            <Col xs={12} md={12}>
                                <h3>Top Creators</h3>
                            </Col>
                            <Col xs={12} md={12} style={{ textAlign: 'end' }}>
                                {/* <span onClick={() => navigate("/")} style={{cursor:"pointer"}}>See All</span> */}
                            </Col>
                        </Row>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProfileCards;
