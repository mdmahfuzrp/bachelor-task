import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const LoadingSpinner = () => (
  <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 20,
        }}
        spin
      />
    }
  />
);
export default LoadingSpinner;
