import { Col, Row, Image, Space, Table, Tag } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router";
// import Pro1 from "../../../assets/pro1.png";


const columns = [
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Cashout Date',
        dataIndex: 'cashoutDate',
        key: 'cashoutDate',
    },
];
const data = [
    {
        key: '1',
        amount: '$19,623.00',
        status: "Approved",
        cashoutDate: 'Aug 10, 2023, 13:00',
    },
    {
        key: '2',
        amount: '$19,623.00',
        status: "Approved",
        cashoutDate: 'Aug 10, 2023, 13:00',
    },
    {
        key: '3',
        amount: '$19,623.00',
        status: "Approved",
        cashoutDate: 'Aug 10, 2023, 13:00',
    },
];

const PaymentTable = () => {
    const navigate = useNavigate();
    return (
        <div className="profileCard-box">
            <Row style={{ width: "100%", justifyContent: "center", }}>
                <Col xs={23} md={24}>
                    <div className="">
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default PaymentTable;
