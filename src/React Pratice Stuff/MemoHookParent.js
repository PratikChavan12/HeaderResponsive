import React, { useMemo, useState } from "react";
import OptMemoHookChild from "./MemoHookChild";

const MemoHookParent = () => {
  const [count, setCount] = useState(0);
  const [updateWord, setUpdateWord] = useState("Boss");
  const memoizedUpdateWord = useMemo(() => updateWord, [updateWord]);
  console.log("MemoHookParent");
  return (
    <>
      <div className="my-2 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center shadow-lg border p-2 w-25">
          <button
            className="btn btn-primary"
            onClick={() => setCount((c) => c + 1)}
          >
            Count: {count}
          </button>
          <button
            className="btn btn-secondary mt-2"
            onClick={() =>
              setUpdateWord((word) => (word === "Sir" ? "Boss" : "Sir"))
            }
          >
            Update Word
          </button>
        </div>
      </div>
      <OptMemoHookChild updateWord={memoizedUpdateWord} />
    </>
  );
};

export default MemoHookParent;
