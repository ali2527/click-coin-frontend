import { useState } from "react";
// import { images } from '../../../Assets'
// import { images } from '../../Assets';
import { Button, Modal, Image, Typography } from "antd";
import "./style.css";
import Done from "../../assets/done.png";

const Modals = ({open,handleOk,handleCancel,text,footer}) => {
  return (
    <div>
       <Modal
        open={open}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
        footer={footer}
        okText="Yes"
        className="StyledModal"
        style={{
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
        cancelText="No"
        cancelButtonProps={{
          className: "no-btn",
        }}
        okButtonProps={{
          className: "web-btn",
        }}
      >
        <Image src={Done} preview={false} width={100} height={100} />
        <Typography.Title level={2} style={{ fontSize: "25px" }}>
         {text}
        </Typography.Title>
      </Modal>
    </div>
  );
};

export default Modals;
