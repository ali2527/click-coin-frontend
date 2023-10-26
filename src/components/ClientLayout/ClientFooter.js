// import { Col, Layout, Row, Input, Image } from "antd";
// import Fotrlogo from "../../assets/fotrlogo.png";
// import Facebook from "../../assets/facebook.png";
// import Twitter from "../../assets/twitter.png";
// import Icn3 from "../../assets/icn3.png";
// import { useNavigate } from "react-router";

// const { Footer } = Layout;
// const { TextArea } = Input;
// const { Search } = Input;

// const options = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//   },
// ];
// const ClientFooter = () => {
//   const navigate = useNavigate();

//   const ourProdutcimages3 = [Facebook, Twitter, Icn3];
//   return (
//     <Footer>
//       <Row style={{ width: "100%", justifyContent: "center" }}>
//         <Col xs={24} md={22}>
//           <Row>
//             <Col xs={24} md={24}>
              
//               <Row justify="center">
//                 <Col xs={24} sm={20} md={24}>
//                   <div
//                     style={{
//                       padding: "0px 10px 0px 10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     <Image
//                       preview={false}
//                       className="music-card-pic"
//                       alt={"Failed to load image"}
//                       src={Fotrlogo}
//                       onClick={() => navigate("/")}
//                     />
//                     <Row justify="center" className="footer-list">
//                       <Col lg={4} key="elementary_tutoring" className="footerLink" onClick={() => navigate("/slatina")}>
//                       Home
//                       </Col>
//                       <Col lg={4} key="middle_school_tutoring" className="footerLink" onClick={() => navigate("/earlyyears")}>
//                       About Us
//                       </Col>
//                       <Col lg={4} key="high_school_tutoring" className="footerLink" onClick={() => navigate("/dynamiccontinuity")}>
//                       Services
//                       </Col>
//                       <Col lg={4} key="adult_tutoring" className="footerLink" onClick={() => navigate("/products")}>
//                       Service Provider’s Blogs
//                       </Col>
//                       <Col lg={4} key="adult_tutoring" className="footerLink" onClick={() => navigate("/musiccatalogue")}>
//                       Contact Us
//                       </Col>
//                     </Row>
//                     <Row justify="space-between" className="footer-list">
//                       <Col xs={24} md={24}>
//                         {ourProdutcimages3.map((image, index) => (
//                           <div className="social-icon-box">
//                             <Image
//                               preview={false}
//                               className="social-icons"
//                               alt={"Failed to load image"}
//                               src={image}
//                             />
//                           </div>
//                         ))}
//                       </Col>
//                     </Row>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//       <Row className="bottom-footer">
//         <Col xs={24} md={24}>
//           <h6>© 2023, IGOTU. All Rights Reserved.</h6>
//         </Col>
//       </Row>
//     </Footer>
//   );
// };

// export default ClientFooter;
