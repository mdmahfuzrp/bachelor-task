import React, { useState } from "react";
import { Button, Modal } from "antd";
const MyModal = ({
  content,
  setOpen,
  footer,
  title,
  open,
  loading,
  handleOk,
}) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          footer
            ? footer
            : [
                <Button key="back" onClick={handleCancel}>
                  Close
                </Button>,
                <Button
                  key="submit"
                  type=""
                  loading={loading}
                  onClick={handleOk}
                  className="!bg-special"
                >
                  Submit
                </Button>,
              ]
        }
        className=""
      >
        {content}
      </Modal>
    </>
  );
};
export default MyModal;
