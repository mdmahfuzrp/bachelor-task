import React, { useState } from "react";
import { Button, Modal } from "antd";
const MyModal = ({ content, setOpen, title, open, loading, handleOk }) => {
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
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
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
        ]}
        className=""
      >
        {content}
      </Modal>
    </>
  );
};
export default MyModal;
