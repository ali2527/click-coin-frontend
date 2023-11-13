import React, { useEffect } from "react";
// import AuthLayout from "../../components/";
import { Layout, Input, Row, Col, Button } from "antd";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../config/api/post";
import { AUTH } from "../../config/constants/api";
import { addUser } from "../../redux/slice/authSlice";
import swal from "sweetalert";
import DashboardProfilepic from "../../views/homepage/dashboardProfilepic";
import ProfileCards from "../../views/homepage/profileCards";
import DashboardTable from "../../views/homepage/dashboardTable";

// import router from "next/router";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Search } = Input;
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.userToken);
  const accessToken = useSelector((state) => state.user.accessToken);
  const [totalEarning, setTotalEarning] = React.useState({});
  const [totalClicks, setTotalClicks] = React.useState();
  const [totalImpressions, setTotalImpressions] = React.useState();

  const [loading, setLoading] = React.useState(false);

useEffect(() => {
if(accessToken){
  getEarningData()
  getClicksData()
  getImpressionsData()
}
},[accessToken])


const getEarningData = async () => {
const apiUrl = 'https://adsense.googleapis.com/v2/accounts/pub-1427684305578818/payments';

          const apiResponse = await fetch(apiUrl, {
                  method: 'GET',
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                });
          
                // Parse and log the API response
                const data = await apiResponse.json();
                setTotalEarning(data.payments ?  data?.payments[0] : "-")

};


const getClicksData = async () => {
  const apiUrl = 'https://content-adsense.googleapis.com/v2/accounts/pub-1427684305578818/reports:generate?metrics=CLICKS&dateRange=LAST_30_DAYS&currencyCode=USD&reportingTimeZone=ACCOUNT_TIME_ZONE';
  
            const apiResponse = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  });
            
                  // Parse and log the API response
                  const data = await apiResponse.json();
                  if(data?.totals?.cells)
                  setTotalClicks(data?.totals?.cells[0].value)
  
  };

  const getImpressionsData = async () => {
    const apiUrl = 'https://content-adsense.googleapis.com/v2/accounts/pub-1427684305578818/reports:generate?metrics=IMPRESSIONS&dateRange=LAST_30_DAYS&currencyCode=USD&reportingTimeZone=ACCOUNT_TIME_ZONE';
    
              const apiResponse = await fetch(apiUrl, {
                      method: 'GET',
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    });
              
                    // Parse and log the API response
                    const data = await apiResponse.json();
                    if(data?.totals?.cells)
                    setTotalImpressions(data?.totals?.cells[0].value)
    
    };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <DashboardProfilepic totalEarning={totalEarning} totalClicks={totalClicks} totalImpressions={totalImpressions} />

      <Row justify={"center"}>
        <Col xs={23} md={22}>
          <div className="main-card">
            <Button
              type="primary"
              htmlType="submit"
              className="web-btn"
              style={{
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => navigate("/cashout")}
            >
              {loading ? "Loading..." : "Continue"}
            </Button>
            {/* <p>Last cash out done on 24/08/2023 at 11:00</p> */}

            <ProfileCards  />
            <DashboardTable  />
          </div>
        </Col>
      </Row>

    </Layout>
  );
}

export default Homepage;
