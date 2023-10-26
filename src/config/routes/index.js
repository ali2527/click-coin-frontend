import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthCheck from "../../components/AuthCheck/UserAuthCheck";
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
import Signup from "../../views/signup"

import UserAuthCheck from "../../components/AuthCheck/UserAuthCheck";
const MyRouter = () => {
  return (
    <BrowserRouter basename="/click-coin">
      <Routes>
        <Route
          path="/dashboard"
          index
          element={ 
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Homepage />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/"
          index
          element={
          
              <Login />
        
          }
        />

<Route
          path="/signup"
          index
          element={
          
              <Signup />
        
          }
        />

        <Route
          path="/analytics"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Analytics />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/campaigns"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Campaigns />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/campaignsDetails/:id"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CampaignsDetails />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/requestLink"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <RequestLink />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/settings"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Settings />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/profileSettings"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ProfileSettings />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/linkAccount"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <LinkAccount />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/topRanking"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <TopRanking />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/paymentLog"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PaymentLog />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/cashout"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Cashout />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/cashoutAmount"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CashoutAmount />
            </ClientLayout>
            </AuthCheck>
          }
        />
        <Route
          path="/faq"
          index
          element={
            <AuthCheck>
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Faq />
            </ClientLayout>
            </AuthCheck>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
