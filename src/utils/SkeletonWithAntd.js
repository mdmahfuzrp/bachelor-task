import React from "react";
import { Skeleton } from "antd";

const SkeletonWithAntd = ({ rows }) => {
  return (
    <Skeleton
      avatar
      paragraph={{
        rows: rows,
      }}
      active
    />
  );
};

export default SkeletonWithAntd;
