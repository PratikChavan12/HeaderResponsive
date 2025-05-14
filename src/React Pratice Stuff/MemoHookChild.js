import React from "react";

const MemoHookChild = ({ updateWord }) => {
  console.log("MemoHookChild");

  return <div className="text-center fs-3">Hello {updateWord}!</div>;
};

export default MemoHookChild;

export const OptMemoHookChild = React.memo(MemoHookChild);
