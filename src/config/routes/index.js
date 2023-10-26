import { BrowserRouter, Routes, Route } from "react-router-dom";

// import AdminAuthCheck from "../../components/AuthCheck/AdminAuthCheck";
import ClientLayout from "../../components/ClientLayout";
import Homepage from "../../views/homepage";
import Analytics from "../../views/analytics";
import Login from "../../views/login";
import Campaigns from "../../views/campaigns";
import CampaignsDetails from "../../views/campaignsDetails";
import RequestLink from "../../views/requestLink";
import Settings from "../../views/settings";
import ProfileSettings from "../../views/profileSettings";
import LinkAccount from "../../views/linkAccount";
import TopRanking from "../../views/topRanking";
import PaymentLog from "../../views/paymentLog";
import Cashout from "../../views/cashout";
import CashoutAmount from "../../views/cashoutAmount";
import Faq from "../../views/faq";


import UserAuthCheck from "../../components/AuthCheck/UserAuthCheck";
const MyRouter = () => {
  return (
    <BrowserRouter basename="/click-coin">
      <Routes>
        <Route
          path="/dashboard"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Homepage />
            </ClientLayout>
          }
        />
        <Route
          path="/"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Login />
            </ClientLayout>
          }
        />
        <Route
          path="/analytics"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Analytics />
            </ClientLayout>
          }
        />
        <Route
          path="/campaigns"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Campaigns />
            </ClientLayout>
          }
        />
        <Route
          path="/campaignsDetails"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CampaignsDetails />
            </ClientLayout>
          }
        />
        <Route
          path="/requestLink"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <RequestLink />
            </ClientLayout>
          }
        />
        <Route
          path="/settings"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Settings />
            </ClientLayout>
          }
        />
        <Route
          path="/profileSettings"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ProfileSettings />
            </ClientLayout>
          }
        />
        <Route
          path="/linkAccount"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <LinkAccount />
            </ClientLayout>
          }
        />
        <Route
          path="/topRanking"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <TopRanking />
            </ClientLayout>
          }
        />
        <Route
          path="/paymentLog"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PaymentLog />
            </ClientLayout>
          }
        />
        <Route
          path="/cashout"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Cashout />
            </ClientLayout>
          }
        />
        <Route
          path="/cashoutAmount"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CashoutAmount />
            </ClientLayout>
          }
        />
        <Route
          path="/faq"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Faq />
            </ClientLayout>
          }
        />
        {/* <Route
          path="/myProfile"
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <MyProfile />
            </ClientLayout>
          }
        >
          <Route path="" index element={<ProfileTab />} />
          <Route path="order_history" element={<OrderHistory />} />
          <Route path="pushNotification" element={<PushNotification />} />
          <Route path="updatePassword" element={<UpdatePassword />} />
          <Route
            path="orderHistoryDetail/:id"
            index
            element={
              <UserAuthCheck>
                <OrderHistoryDetail />
              </UserAuthCheck>
            }
          />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
