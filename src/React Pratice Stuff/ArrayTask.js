import React from "react";

const ArrayTask = () => {
  const arraList = [
    { name: "abc", id: 3 },
    { name: "xyz", id: 43 },
  ];

  arraList.map((item, idx) => console.log(item?.name + item?.id));

  arraList.map((item, idx) =>
    console.log(item?.name + ", " + item?.id + ", " + item?.name + item?.id)
  );

  //   console.log("Output 1:");
  //   const output1_1 = arraList?.[0]?.name + arraList?.[0]?.id;
  //   const output1_2 = arraList?.[1]?.name + arraList?.[1]?.id;
  //   console.log(output1_1);
  //   console.log(output1_2);

  //   const output2_1 =
  //     arraList?.[0]?.name +
  //     ", " +
  //     arraList?.[0]?.id +
  //     ", " +
  //     arraList?.[0]?.name +
  //     arraList?.[0]?.id;

  //   const output2_2 =
  //     arraList?.[1]?.name +
  //     ", " +
  //     arraList?.[1]?.id +
  //     ", " +
  //     arraList?.[1]?.name +
  //     arraList?.[1]?.id;

  //   console.log("Output 2:");
  //   console.log(output2_1);
  //   console.log(output2_2);

  return (
    <>
      <div className="bg-primary text-white text-center p-5 fs-2">
        Array Task
      </div>
    </>
  );
};

export default ArrayTask;
