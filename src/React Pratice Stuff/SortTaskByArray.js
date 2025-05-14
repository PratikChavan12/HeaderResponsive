import React from "react";

const SortTaskByArray = () => {
  const arr = [4, 5, 9, 1, 10, 12];

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     let value = 0;
  //     if (arr[i] > arr[j]) {
  //       value = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = value;
  //     }
  //   }
  // }

  console.log("OG Array:", arr);

  // const mini_number = arr.reduce((accumulator, current) => {
  //   return current > accumulator ? current : accumulator;
  // });

  // console.log(mini_number);

  // const minimum_number = arr.reduce((accumulator, current) => {
  //   return Math.min(accumulator, current);
  // });
  // console.log(minimum_number);

  // const new_array = arr.reduce((accumulator, current) => {
  //   const index = accumulator.findIndex((value) => value > current);
  //   if (index === -1) {
  //     accumulator.push(current);
  //   } else {
  //     accumulator.splice(index, 0, current);
  //   }
  //   return accumulator;
  // }, []);
  // console.log("New Array:", new_array);

  return (
    <>
      <div className="bg-primary text-white text-center p-5 fs-2">
        Sort Task By Array
      </div>
    </>
  );
};

export default SortTaskByArray;
